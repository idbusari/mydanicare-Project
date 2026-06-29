export function Card({ title, value, color }: { title: string; value: number; color: string }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderLeft: `4px solid ${color}`,
      }}
    >
      <p style={{ fontSize: '0.85rem', color: '#5e6883', marginBottom: '8px', fontWeight: 500 }}>
        {title}
      </p>
      <p style={{ fontSize: '2rem', fontWeight: 700, color: '#1a3c6e', margin: 0 }}>
        {value}
      </p>
    </div>
  );
}
