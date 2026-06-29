'use client';

import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

export default function AdminWrapper({ siteContent, adminContent }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  return (
    <SessionProvider>
      {isAdmin ? adminContent : siteContent}
    </SessionProvider>
  );
}
