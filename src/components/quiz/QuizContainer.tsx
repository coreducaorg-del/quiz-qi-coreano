'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { perguntas } from '@/lib/perguntas'
import { RespostaUsuario, calcularResultado } from '@/lib/tipos'
import BarraProgresso from './BarraProgresso'
import Pergunta from './Pergunta'
import SlideInfo from './SlideInfo'
import LoadingScreen from './LoadingScreen'

export default function QuizContainer() {
  const router = useRouter()
  const [indice, setIndice] = useState(0)
  const [respostas, setRespostas] = useState<RespostaUsuario[]>([])
  const [loading, setLoading] = useState(false)

  const itemAtual = perguntas[indice]
  const totalPerguntas = perguntas.filter((p) => p.tipo === 'pergunta').length
  const perguntasRespondidas = respostas.length

  function avancar() {
    const proximo = indice + 1
    if (proximo >= perguntas.length) {
      finalizarQuiz()
    } else {
      setIndice(proximo)
    }
  }

  function responder(alternativaId: string) {
    setRespostas((prev) => [
      ...prev,
      { perguntaId: itemAtual.id, alternativaId },
    ])
    avancar()
  }

  function finalizarQuiz() {
    setLoading(true)
    const tipo = calcularResultado(respostas)
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
          numeroPergunta={perguntasRespondidas}
        />
      ) : (
        <>
          <BarraProgresso numeroPergunta={perguntasRespondidas + 1} />
          <Pergunta
            key={indice}
            pergunta={itemAtual}
            numeroPergunta={perguntasRespondidas + 1}
            onResponder={responder}
          />
        </>
      )}
    </div>
  )
}
