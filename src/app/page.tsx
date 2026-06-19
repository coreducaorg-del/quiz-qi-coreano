import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        background: '#EDE9FE',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '52px 28px 36px',
        maxWidth: 430,
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Seção 1 — Título + subtítulo itálico */}
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 38,
            fontWeight: 900,
            color: '#0D0D0D',
            lineHeight: 1.15,
            margin: '0 0 18px',
          }}
        >
          Descubra o seu{' '}
          <span
            style={{
              background: '#5B21B6',
              color: '#FFFFFF',
              borderRadius: 4,
              padding: '0 5px',
              whiteSpace: 'nowrap',
            }}
          >
            &ldquo;QI Coreano&rdquo;
          </span>{' '}
          em menos de 2 min!
        </h1>

        <p
          style={{
            fontSize: 15,
            fontStyle: 'italic',
            color: '#7C3AED',
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Mesmo se não sabe nada de coreano!
        </p>
      </div>

      {/* Seção 2 — Frase destacada + complementar */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.85,
            margin: '0 0 18px',
          }}
        >
          <span
            style={{
              background: '#5B21B6',
              color: '#FFFFFF',
              padding: '2px 7px',
              borderRadius: 4,
              WebkitBoxDecorationBreak: 'clone',
              boxDecorationBreak: 'clone',
            }}
          >
            Certas pessoas têm mais facilidade em aprender coreano do que outras.
          </span>
        </p>

        <p
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#0D0D0D',
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          O que dita isso é o seu <strong style={{ fontWeight: 900 }}>QI Coreano.</strong>
        </p>
      </div>

      {/* Seção 3 — Botão + rodapé */}
      <div>
        <Link
          href="/quiz"
          style={{
            display: 'block',
            width: '100%',
            background: '#22C55E',
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: 700,
            textAlign: 'center',
            padding: '18px 0',
            borderRadius: 50,
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          Quero descobrir agora!
        </Link>

        <div style={{ marginTop: 14, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#7C3AED', margin: '0 0 3px' }}>
            Teste 100% anônimo
          </p>
          <p style={{ fontSize: 12, color: '#7C3AED', margin: 0 }}>
            P.S.: Informações protegidas com criptografia
          </p>
        </div>
      </div>
    </div>
  )
}
