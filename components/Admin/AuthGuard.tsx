'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

const ROLE_ROUTES: Record<string, string[]> = {
  admin: ['all'],
  editor: ['/admin', '/admin/blog', '/admin/settings', '/admin/seo', '/admin/profile'],
  business: ['/admin', '/admin/leads', '/admin/analytics', '/admin/seo', '/admin/profile'],
};

function canAccess(role: string, path: string) {
  const allowed = ROLE_ROUTES[role] || [];
  if (allowed.includes('all')) return true;
  return allowed.some((route) => path === route || path.startsWith(route + '/'));
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const role = (session?.user as { role?: string })?.role || '';

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
    if (status === 'authenticated' && role && !canAccess(role, pathname)) {
      router.push('/admin');
    }
  }, [status, role, pathname, router]);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (status === 'loading') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null;
  }

  if (role && !canAccess(role, pathname)) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#dc2626', marginBottom: '8px' }}>Access Denied</h2>
          <p style={{ color: '#5e6883' }}>You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
