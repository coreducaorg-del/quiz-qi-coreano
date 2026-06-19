'use client'

import { Pergunta as PerguntaType } from '@/lib/tipos'
import Alternativa from './Alternativa'

interface PerguntaProps {
  pergunta: PerguntaType
  numeroPergunta: number
  onResponder: (alternativaId: string) => void
}

export default function Pergunta({ pergunta, numeroPergunta, onResponder }: PerguntaProps) {
  return (
    <div
      className="slide-in"
      style={{
        maxWidth: 384,
        margin: '0 auto',
        width: '100%',
        padding: '12px 20px 24px',
      }}
    >
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: '#1E0350',
          lineHeight: 1.4,
          marginBottom: 40,
        }}
      >
        {pergunta.texto}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {pergunta.alternativas?.map((alt) => (
          <Alternativa key={alt.id} alternativa={alt} onClick={onResponder} />
        ))}
      </div>
    </div>
  )
}
