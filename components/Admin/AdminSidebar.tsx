'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  LogOut,
  Globe,
  Shield,
  UserCircle,
  Lock,
} from 'lucide-react';

const ROLE_ROUTES: Record<string, string[]> = {
  admin: ['all'],
  editor: ['/admin/blog', '/admin/settings', '/admin/seo', '/admin/profile'],
  business: ['/admin', '/admin/leads', '/admin/seo', '/admin/profile'],
};

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, minRole: 'business' },
  { href: '/admin/leads', label: 'Leads', icon: Users, minRole: 'business' },
  { href: '/admin/blog', label: 'Blog CMS', icon: FileText, minRole: 'editor' },
  { href: '/admin/settings', label: 'Site Settings', icon: Settings, minRole: 'editor' },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3, minRole: 'editor' },
  { href: '/admin/seo', label: 'SEO Dashboard', icon: Globe, minRole: 'business' },
  { href: '/admin/users', label: 'Users', icon: Shield, minRole: 'admin' },
];

const bottomItems = [
  { href: '/admin/profile', label: 'My Profile', icon: UserCircle },
];

function roleLevel(role: string) {
  const levels: Record<string, number> = { business: 1, editor: 2, admin: 3 };
  return levels[role] || 0;
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = (session?.user as { role?: string; name?: string; email?: string })?.role || '';
  const userName = (session?.user as { name?: string })?.name || '';

  const visibleItems = menuItems.filter((item) => roleLevel(role) >= roleLevel(item.minRole));

  return (
    <aside
      style={{
        width: '260px',
        background: '#1a3c6e',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0',
      }}
    >
      <div style={{ padding: '0 24px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
          DaniCare Admin
        </h2>
        <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '4px 0 0' }}>
          Management Portal
        </p>
      </div>

      {userName && (
        <div style={{ padding: '16px 24px 0' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{userName}</div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {role}
          </div>
        </div>
      )}

      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {visibleItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '4px',
                color: isActive ? '#1a3c6e' : 'rgba(255,255,255,0.8)',
                background: isActive ? '#FFCC00' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: '0 12px 8px' }}>
        {bottomItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '4px',
                color: isActive ? '#1a3c6e' : 'rgba(255,255,255,0.8)',
                background: isActive ? '#FFCC00' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            background: 'rgba(255,255,255,0.1)',
            color: '#fff',
            fontSize: '0.95rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
