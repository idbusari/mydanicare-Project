export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #FFCC00',
          borderRadius: '50%',
          animation: 'danispin 1s linear infinite',
        }}
      />
      <p
        style={{
          marginTop: '16px',
          color: '#333132',
          fontWeight: 600,
          fontSize: '1rem',
        }}
      >
        Loading DaniCare...
      </p>
    </div>
  );
}
