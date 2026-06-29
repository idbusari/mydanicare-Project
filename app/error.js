'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line no-console
      console.error('Application error:', error);
    }
  }, [error]);

  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-4" style={{ fontSize: '4rem', color: '#E66926' }}>
            Something went wrong
          </h1>
          <p className="lead mb-4">
            We apologize for the inconvenience. An unexpected error has occurred.
            Please try again or contact us if the problem persists.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              onClick={reset}
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
              Try Again
            </button>
            <Link
              href="/"
              className="btn btn-outline-dark px-4 py-2"
              style={{
                borderRadius: '36px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
