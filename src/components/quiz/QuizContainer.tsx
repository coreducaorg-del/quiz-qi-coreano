'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { perguntas } from '@/lib/perguntas'
import { RespostaUsuario, calcularResultado } from '@/lib/tipos'
import BarraProgresso from './BarraProgresso'
import Pergunta from './Pergunta'
import SlideInfo from './SlideInfo'
import LoadingScreen from './LoadingScreen'

// Conta quantas perguntas (tipo 'pergunta') existem entre 0 e idx (exclusive)
function perguntasAntesDe(idx: number) {
  return perguntas.slice(0, idx).filter((p) => p.tipo === 'pergunta').length
}

export default function QuizContainer() {
  const router = useRouter()
  const [indice, setIndice] = useState(0)
  const [respostas, setRespostas] = useState<Record<number, string>>({})
  const [loading, setLoading] = useState(false)

  const itemAtual = perguntas[indice]
  const totalPerguntas = perguntas.filter((p) => p.tipo === 'pergunta').length

  // Número sequencial da pergunta atual (1-based). Para slides, representa
  // quantas perguntas já foram respondidas antes dele.
  const numeroPergunta =
    itemAtual.tipo === 'pergunta' ? perguntasAntesDe(indice) + 1 : perguntasAntesDe(indice)

  function avancar() {
    const proximo = indice + 1
    if (proximo >= perguntas.length) {
      finalizarQuiz()
    } else {
      setIndice(proximo)
    }
  }

  function voltar() {
    if (indice === 0) return
    setIndice(indice - 1)
  }

  function responder(alternativaId: string) {
    setRespostas((prev) => ({ ...prev, [itemAtual.id]: alternativaId }))
    avancar()
  }

  function finalizarQuiz() {
    setLoading(true)
    const respostasArray: RespostaUsuario[] = Object.entries(respostas).map(
      ([perguntaId, alternativaId]) => ({ perguntaId: Number(perguntaId), alternativaId })
    )
    const tipo = calcularResultado(respostasArray)
    // 5000ms da animação do círculo + 800ms com o check visível
    setTimeout(() => {
      router.push(`/resultado?tipo=${tipo}`)
    }, 5800)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div style={{ background: '#EDE9FE', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {itemAtual.tipo === 'slide' ? (
        <SlideInfo
          key={indice}
          id={itemAtual.id}
          texto={itemAtual.textoSlide!}
          onContinuar={avancar}
          onVoltar={voltar}
          numeroPergunta={numeroPergunta}
        />
      ) : (
        <>
          <BarraProgresso numeroPergunta={numeroPergunta} />
          <Pergunta
            key={indice}
            pergunta={itemAtual}
            numeroPergunta={numeroPergunta}
            onResponder={responder}
            onVoltar={voltar}
            mostrarVoltar={indice > 0}
            respostaSelecionada={respostas[itemAtual.id]}
          />
        </>
      )}
    </div>
  )
}
