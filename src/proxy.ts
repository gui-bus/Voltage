import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// Next.js 16.1.1 uses `proxy` instead of `middleware`
export const proxy = createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
