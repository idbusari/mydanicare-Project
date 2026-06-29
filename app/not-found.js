import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | DaniCare Psychiatry',
  description:
    'The page you are looking for does not exist. Return to DaniCare Psychiatry homepage for mental health care services.',
};

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-3" style={{ fontSize: '6rem', fontWeight: 700, color: '#E66926' }}>
            404
          </h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-4">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="btn btn-primary px-4 py-2"
            style={{
              background: '#FFCC00',
              border: 'none',
              color: '#333132',
              borderRadius: '36px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
            }}
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
