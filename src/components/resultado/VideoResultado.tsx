'use client'

import { TipoResultado } from '@/lib/tipos'

interface VideoResultadoProps {
  tipo: TipoResultado
}

const videos: Record<TipoResultado, string> = {
  A2: 'https://www.youtube.com/embed/placeholder-a2',
  A3: 'https://www.youtube.com/embed/placeholder-a3',
}

export default function VideoResultado({ tipo }: VideoResultadoProps) {
  return (
    <div style={{ padding: '0 24px' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          background: '#C4B5FD',
          borderRadius: 16,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Placeholder play button — substituído pelo iframe quando URLs reais chegarem */}
        <div
          style={{
            width: 56,
            height: 56,
            background: '#5B21B6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M7 4.5L18 11L7 17.5V4.5Z" fill="white" />
          </svg>
        </div>
        <iframe
          src={videos[tipo]}
          title={`Resultado Tipo ${tipo}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="hidden"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
