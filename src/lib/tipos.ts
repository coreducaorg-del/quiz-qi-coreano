export type TipoResultado = 'A2' | 'A3'

export interface Alternativa {
  id: string
  texto: string
  emoji?: string
}

export interface Pergunta {
  id: number
  tipo: 'pergunta' | 'slide'
  bloco: 'situacao' | 'problema' | 'implicacao' | 'solucao'
  texto: string
  alternativas?: Alternativa[]
  textoSlide?: string
}

export interface RespostaUsuario {
  perguntaId: number
  alternativaId: string
}

export function calcularResultado(respostas: RespostaUsuario[]): TipoResultado {
  const respostaP1 = respostas.find((r) => r.perguntaId === 1)
  if (respostaP1?.alternativaId === 'A') return 'A2'
  return 'A3'
}
