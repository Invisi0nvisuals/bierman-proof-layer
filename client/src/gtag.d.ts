// GA4 gtag global type declaration
// gtag() is initialized in index.html via the Google tag snippet (G-0L2R25L1T7)
// This declaration prevents TypeScript errors when calling gtag() in components.

declare function gtag(
  command: 'event',
  eventName: string,
  params?: Record<string, unknown>
): void;

declare function gtag(
  command: 'config' | 'js' | 'set',
  targetId: string | Date,
  params?: Record<string, unknown>
): void;
