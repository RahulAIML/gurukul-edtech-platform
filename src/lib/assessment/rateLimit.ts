/**
 * Lightweight in-memory per-IP rate limiter.
 *
 * LIMITATION: on serverless (Vercel) each function instance has its own
 * memory, so this does not enforce a global limit across all instances.
 * It still meaningfully throttles rapid repeat calls hitting the same
 * warm instance (the common case for a single user double-clicking or
 * scripting retries) and costs nothing to run. A durable global limit
 * would need a shared store (e.g. Redis/Upstash) — left as a documented
 * follow-up since no such store exists in this project yet.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function checkRateLimit(identifier: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const existing = (hits.get(identifier) ?? []).filter((t) => t > windowStart);

  if (existing.length >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterMs = existing[0] + WINDOW_MS - now;
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)) };
  }

  existing.push(now);
  hits.set(identifier, existing);

  // Opportunistic cleanup so this Map doesn't grow unbounded on a long-lived instance.
  if (hits.size > 5000) {
    Array.from(hits.entries()).forEach(([key, timestamps]) => {
      if (timestamps.every((t) => t <= windowStart)) hits.delete(key);
    });
  }

  return { allowed: true };
}
