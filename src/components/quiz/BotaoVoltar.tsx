'use client'

interface BotaoVoltarProps {
  onClick: () => void
}

export default function BotaoVoltar({ onClick }: BotaoVoltarProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Voltar"
      style={{
        background: 'none',
        border: 'none',
        padding: 12,
        margin: '0 0 0 -12px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        alignSelf: 'flex-start',
      }}
    >
      <span style={{ fontSize: 20, color: '#7C3AED', lineHeight: 1 }}>←</span>
    </button>
  )
}
