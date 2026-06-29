/**
 * Simple in-memory rate limiter for Next.js API routes.
 * Limits requests per IP address within a time window.
 * For production scale, migrate to Redis (e.g. Upstash).
 */

const rateLimitMap = new Map();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // max requests per window per IP

function getClientIP(req) {
  // Check forwarded headers (proxies / load balancers)
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  // Fallback for direct connections
  return req.headers.get('x-real-ip') || 'unknown';
}

export function rateLimit(req) {
  const ip = getClientIP(req);
  const now = Date.now();

  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true };
  }

  if (now > record.resetAt) {
    // Window expired, reset
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true };
  }

  if (record.count >= MAX_REQUESTS) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    };
  }

  record.count += 1;
  return { success: true };
}

// Clean up expired entries every 10 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 10 * 60 * 1000);
