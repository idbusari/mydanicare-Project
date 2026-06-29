import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DaniCare Psychiatry - Compassionate Mental Health Care',
    short_name: 'DaniCare',
    description:
      'Telepsychiatry and in-person mental health care in Texas. Board-certified psychiatric evaluations, medication management, and therapy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a3c6e',
    icons: [
      {
        src: '/images/danicareLogo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
    categories: ['health', 'medical'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    orientation: 'portrait',
  };
}
