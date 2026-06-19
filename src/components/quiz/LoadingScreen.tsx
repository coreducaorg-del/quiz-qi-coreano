'use client'

import { useEffect, useState } from 'react'

// Círculo: 72x72, stroke 6, raio = (72 - 6) / 2 = 33
const RADIUS = 33
const CIRCUMFERENCE = 2 * Math.PI * RADIUS // ≈ 207.35

const textos = [
  'Analisando suas respostas...',
  'Identificando o seu perfil...',
]

export default function LoadingScreen() {
  const [fase, setFase] = useState(0)       // 0 = primeiro texto, 1 = segundo texto
  const [visivel, setVisivel] = useState(true) // controla fade

  useEffect(() => {
    // Troca de texto com fade: começa fade-out em 2300ms, troca em 2700ms, fade-in
    const fadeOut = setTimeout(() => setVisivel(false), 2300)
    const trocar  = setTimeout(() => { setFase(1); setVisivel(true) }, 2700)
    return () => { clearTimeout(fadeOut); clearTimeout(trocar) }
  }, [])

  return (
    <div
      style={{
        background: '#EDE9FE',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      {/* Círculo de progresso SVG */}
      <svg width={72} height={72} style={{ marginBottom: 24, transform: 'rotate(-90deg)' }}>
        {/* Trilha (fundo) */}
        <circle
          cx={36}
          cy={36}
          r={RADIUS}
          fill="none"
          stroke="#C4B5FD"
          strokeWidth={6}
        />
        {/* Preenchimento animado */}
        <circle
          cx={36}
          cy={36}
          r={RADIUS}
          fill="none"
          stroke="#5B21B6"
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          style={{
            strokeDashoffset: CIRCUMFERENCE,
            animation: 'progress-circle 5000ms linear forwards',
          }}
        />
      </svg>

      {/* Texto alternado com fade */}
      <p
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#1E0350',
          margin: '0 0 8px',
          opacity: visivel ? 1 : 0,
          transition: 'opacity 400ms ease',
        }}
      >
        {textos[fase]}
      </p>
      <p style={{ fontSize: 14, color: '#7C3AED', margin: 0 }}>
        Calculando o seu QI Coreano
      </p>
    </div>
  )
}
