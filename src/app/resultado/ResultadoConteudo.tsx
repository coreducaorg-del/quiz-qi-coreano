'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { TipoResultado } from '@/lib/tipos'
import VideoResultado from '@/components/resultado/VideoResultado'

const subtitulos: Record<TipoResultado, string> = {
  A2: 'Você ainda não começou a aprender coreano — mas seu potencial está esperando para ser descoberto.',
  A3: 'Você já tentou aprender coreano mas travou no caminho. Veja o que isso significa:',
}

export default function ResultadoConteudo() {
  const params = useSearchParams()
  const tipo = (params.get('tipo') as TipoResultado) ?? 'A3'
  const subtitulo = subtitulos[tipo] ?? subtitulos['A3']

  return (
    <div
      style={{
        maxWidth: 384,
        margin: '0 auto',
        width: '100%',
        padding: '32px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Badge */}
      <span
        style={{
          display: 'inline-block',
          background: '#C4B5FD',
          color: '#3B0764',
          fontSize: 12,
          fontWeight: 700,
          borderRadius: 8,
          padding: '4px 10px',
          marginBottom: 12,
          alignSelf: 'flex-start',
        }}
      >
        Seu resultado
      </span>

      {/* Título */}
      <p
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: '#1E0350',
          margin: '0 0 8px',
          lineHeight: 1.3,
        }}
      >
        Você é{' '}
        <span
          style={{
            background: '#5B21B6',
            color: '#FFFFFF',
            borderRadius: 4,
            padding: '1px 5px',
          }}
        >
          Tipo {tipo}
        </span>
      </p>

      {/* Barra de perfis */}
      <img
        src="/barraquiz.png"
        alt="Barra de perfis QI Coreano"
        style={{ width: '100%', marginTop: 16, marginBottom: 20, display: 'block' }}
      />

      {/* Subtítulo */}
      <p
        style={{
          fontSize: 14,
          color: '#4C1D95',
          lineHeight: 1.5,
          margin: '0 0 20px',
        }}
      >
        {subtitulo}
      </p>

      {/* Vídeo */}
      <VideoResultado tipo={tipo} />

      <p
        style={{
          fontSize: 12,
          color: '#7C3AED',
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        Assista ao vídeo completo abaixo
      </p>

      <div style={{ marginTop: 'auto', paddingTop: 32, textAlign: 'center' }}>
        <Link
          href="/"
          style={{ fontSize: 13, color: '#7C3AED', textDecoration: 'underline' }}
        >
          Refazer o quiz
        </Link>
      </div>
    </div>
  )
}
