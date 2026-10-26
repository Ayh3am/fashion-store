export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      color: '#000000'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '-1px', margin: 0 }}>
        Yeni Sezon
      </h1>
      <p style={{ color: '#666', marginTop: '10px', fontSize: '1.2rem' }}>
        Zamansız parçalar. Siyah ve beyaz.
      </p>
      <button style={{
        marginTop: '30px',
        padding: '12px 24px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem'
      }}>
        Alışverişe Başla
      </button>
    </main>
  );
}
