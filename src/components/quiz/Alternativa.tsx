'use client'

import { useState } from 'react'
import { Alternativa as AlternativaType } from '@/lib/tipos'

interface AlternativaProps {
  alternativa: AlternativaType
  onClick: (id: string) => void
}

export default function Alternativa({ alternativa, onClick }: AlternativaProps) {
  const [selecionada, setSelecionada] = useState(false)

  function handleClick() {
    if (selecionada) return
    setSelecionada(true)
    setTimeout(() => onClick(alternativa.id), 300)
  }

  return (
    <button
      onClick={handleClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '20px 18px',
        border: selecionada ? '1.5px solid #5B21B6' : '1.5px solid #C4B5FD',
        borderRadius: 12,
        background: selecionada ? '#FFFFFF' : '#F5F3FF',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'border-color 0.15s, background 0.15s',
      }}
    >
      {alternativa.emoji && (
        <span style={{ fontSize: 20, width: 32, textAlign: 'center', flexShrink: 0 }}>
          {alternativa.emoji}
        </span>
      )}
      <span style={{ fontSize: 17, color: '#1a1a1a', lineHeight: 1.4 }}>
        {alternativa.texto}
      </span>
    </button>
  )
}
