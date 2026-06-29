'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/Admin/AdminSidebar';
import AuthGuard from '@/components/Admin/AuthGuard';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname === '/admin/login';

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <AuthGuard>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
        <AdminSidebar />
        <main style={{ flex: 1, padding: '32px', overflow: 'auto' }}>
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
