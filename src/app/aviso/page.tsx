import Link from 'next/link'

export default function AvisoPage() {
  return (
    <div
      style={{
        background: '#EDE9FE',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 28px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: 48, marginBottom: 24 }}>🔒</span>

      <h1
        style={{
          fontSize: 26,
          fontWeight: 800,
          color: '#1E0350',
          lineHeight: 1.2,
          margin: '0 0 16px',
        }}
      >
        Não tem resposta certa e errada!
      </h1>

      <p
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: '#4C1D95',
          lineHeight: 1.5,
          margin: '0 0 48px',
        }}
      >
        Para melhor avaliação, responda tudo com 100% de sinceridade
      </p>

      <Link
        href="/quiz"
        style={{
          display: 'block',
          width: '100%',
          background: '#22C55E',
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: 700,
          textAlign: 'center',
          padding: '18px 0',
          borderRadius: 50,
          textDecoration: 'none',
          boxSizing: 'border-box',
        }}
      >
        Vou responder tudo com sinceridade
      </Link>
    </div>
  )
}
