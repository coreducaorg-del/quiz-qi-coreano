'use client'

import { Pergunta as PerguntaType } from '@/lib/tipos'
import Alternativa from './Alternativa'
import BotaoVoltar from './BotaoVoltar'

interface PerguntaProps {
  pergunta: PerguntaType
  numeroPergunta: number
  onResponder: (alternativaId: string) => void
  onVoltar: () => void
  mostrarVoltar: boolean
  respostaSelecionada?: string
}

export default function Pergunta({
  pergunta,
  numeroPergunta,
  onResponder,
  onVoltar,
  mostrarVoltar,
  respostaSelecionada,
}: PerguntaProps) {
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
      {mostrarVoltar && <BotaoVoltar onClick={onVoltar} />}
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: '#1E0350',
          lineHeight: 1.4,
          marginTop: mostrarVoltar ? 8 : 0,
          marginBottom: 40,
        }}
      >
        {pergunta.texto}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {pergunta.alternativas?.map((alt) => (
          <Alternativa
            key={alt.id}
            alternativa={alt}
            onClick={onResponder}
            selecionadaInicial={alt.id === respostaSelecionada}
          />
        ))}
      </div>
    </div>
  )
}
