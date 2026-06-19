import { Pergunta } from './tipos'

export const perguntas: Pergunta[] = [
  {
    id: 1,
    tipo: 'pergunta',
    bloco: 'situacao',
    texto: 'Qual é a sua relação atual com o coreano?',
    alternativas: [
      { id: 'A', emoji: '🌱', texto: 'Nunca estudei, mas tenho muita vontade de aprender' },
      { id: 'B', emoji: '📖', texto: 'Já tentei aprender, mas não fui muito longe' },
      { id: 'C', emoji: '🔄', texto: 'Estudo de vez em quando, mas sem consistência' },
      { id: 'D', emoji: '🎯', texto: 'Estou estudando ativamente agora' },
    ],
  },
  {
    id: 2,
    tipo: 'pergunta',
    bloco: 'situacao',
    texto: 'Você já tentou aprender outro idioma antes do coreano?',
    alternativas: [
      { id: 'A', emoji: '✅', texto: 'Sim, e fui bem. Consigo me comunicar até hoje' },
      { id: 'B', emoji: '😓', texto: 'Sim, mas travei no meio e acabei desistindo' },
      { id: 'C', emoji: '👀', texto: 'Tentei superficialmente, mas nunca me comprometi de verdade' },
      { id: 'D', emoji: '🆕', texto: 'Não, o coreano seria meu primeiro idioma' },
    ],
  },
  {
    id: 3,
    tipo: 'pergunta',
    bloco: 'situacao',
    texto: 'Há quanto tempo você consome conteúdo coreano (doramas, músicas, vlogs)?',
    alternativas: [
      { id: 'A', emoji: '🌸', texto: 'Faz menos de 6 meses que entrei nesse mundo' },
      { id: 'B', emoji: '📅', texto: 'Entre 6 meses e 2 anos' },
      { id: 'C', emoji: '⭐', texto: 'Mais de 2 anos' },
      { id: 'D', emoji: '🔍', texto: 'Ainda não consumo muito, mas quero começar' },
    ],
  },
  {
    id: 4,
    tipo: 'pergunta',
    bloco: 'situacao',
    texto: 'Quando você assiste um dorama, o que acontece naturalmente?',
    alternativas: [
      { id: 'A', emoji: '📝', texto: 'Tenho que dar mais foco na legenda do que na cena' },
      { id: 'B', emoji: '👂', texto: 'Percebo algumas palavras repetidas mas não sei o que significam' },
      { id: 'C', emoji: '💡', texto: 'Já consigo pegar algumas palavras e associar ao contexto' },
    ],
  },
  {
    id: 5,
    tipo: 'pergunta',
    bloco: 'situacao',
    texto: 'Você tem facilidade para identificar e reproduzir sons que não existem no português?',
    alternativas: [
      { id: 'A', emoji: '🎵', texto: 'Sim. Tenho boa percepção auditiva e imito sons com facilidade' },
      { id: 'B', emoji: '📈', texto: 'Com prática consigo, mas no começo é difícil' },
      { id: 'C', emoji: '😤', texto: 'Tenho dificuldade, mas me esforço' },
      { id: 'D', emoji: '🤔', texto: 'Nunca testei isso de forma consciente' },
    ],
  },
  {
    id: 6,
    tipo: 'pergunta',
    bloco: 'problema',
    texto: 'Quando você tenta aprender palavras novas em coreano, o que geralmente acontece?',
    alternativas: [
      { id: 'A', emoji: '⏱️', texto: 'Consigo lembrar na hora, mas esqueço no mesmo dia ou no dia seguinte' },
      { id: 'B', emoji: '📆', texto: 'Lembro por alguns dias, mas some em menos de uma semana' },
      { id: 'C', emoji: '🗓️', texto: 'Fica na cabeça por uma semana, mas depois desaparece' },
      { id: 'D', emoji: '🆕', texto: 'Nunca tentei aprender, mas quero começar' },
    ],
  },
  {
    id: 7,
    tipo: 'pergunta',
    bloco: 'problema',
    texto: 'Qual é a sua maior dificuldade hoje com o coreano?',
    alternativas: [
      { id: 'A', emoji: '📖', texto: 'Esqueço os vocabulários rápido demais' },
      { id: 'B', emoji: '🗣️', texto: 'A pronúncia não fica na cabeça. Eu esqueço' },
      { id: 'C', emoji: '🔄', texto: 'Aprendo uma coisa e quando volto, parece que nunca vi' },
      { id: 'D', emoji: '🤷', texto: 'Não consigo nem começar, não sei por onde ir' },
    ],
  },
  {
    id: 8,
    tipo: 'pergunta',
    bloco: 'problema',
    texto: 'Você já tentou anotar, repetir ou revisar palavras em coreano para memorizar melhor?',
    alternativas: [
      { id: 'A', emoji: '😔', texto: 'Sim, mas mesmo assim esqueço. Não resolve de verdade' },
      { id: 'B', emoji: '🚫', texto: 'Tentei algumas vezes mas desisti porque não via resultado' },
      { id: 'C', emoji: '📋', texto: 'Nunca tentei de forma organizada, mas quero tentar' },
    ],
  },
  {
    id: 9,
    tipo: 'slide',
    bloco: 'problema',
    texto: '',
    textoSlide:
      'Você sabia? Estudos sobre aquisição de idiomas mostram que mais de 80% das pessoas que tentam aprender uma língua sozinhas esquecem a maior parte do vocabulário novo em menos de 72 horas. Não por falta de esforço, mas por conta de como a memória está processando essa informação.',
  },
  {
    id: 10,
    tipo: 'pergunta',
    bloco: 'problema',
    texto: 'Você já tentou falar ou escrever alguma palavra em coreano, mesmo sem estudar formalmente?',
    alternativas: [
      { id: 'A', emoji: '🎤', texto: 'Sim, várias. Pego palavras de músicas, doramas, memes' },
      { id: 'B', emoji: '💬', texto: 'Algumas palavras soltas, mais por curiosidade' },
      { id: 'C', emoji: '🌱', texto: 'Não ainda, mas tenho vontade' },
      { id: 'D', emoji: '📚', texto: 'Não, prefiro aprender certo antes de tentar' },
    ],
  },
  {
    id: 11,
    tipo: 'pergunta',
    bloco: 'implicacao',
    texto: 'Pensa nos últimos meses. Quanto vocabulário coreano você sente que realmente reteve?',
    alternativas: [
      { id: 'A', emoji: '😰', texto: 'Quase nada. É frustrante porque já vi muita coisa' },
      { id: 'B', emoji: '🤏', texto: 'Algumas palavras soltas, mas nada que me faça entender de verdade' },
      { id: 'C', emoji: '📊', texto: 'Algumas frases, mas longe do que eu gostaria' },
      { id: 'D', emoji: '🆕', texto: 'Nenhum, mas busco começar' },
    ],
  },
  {
    id: 12,
    tipo: 'pergunta',
    bloco: 'implicacao',
    texto: 'O que acontece quando você assiste um dorama SEM legenda, mesmo que seja algo que já assistiu?',
    alternativas: [
      { id: 'A', emoji: '😵', texto: 'Não entendo praticamente nada. Dependo completamente da legenda' },
      { id: 'B', emoji: '👂', texto: 'Pego palavras soltas mas perco o fio da conversa' },
      { id: 'C', emoji: '🧩', texto: 'Entendo o contexto por expressões, mas não o idioma' },
    ],
  },
  {
    id: 13,
    tipo: 'pergunta',
    bloco: 'implicacao',
    texto: 'Se nada mudar, qual dessas situações te incomoda mais quando você pensa no futuro?',
    alternativas: [
      { id: 'A', emoji: '📺', texto: 'Continuar dependendo de legenda pra sempre nos doramas e músicas' },
      { id: 'B', emoji: '🗣️', texto: 'Nunca conseguir entender um coreano de verdade numa conversa real' },
      { id: 'C', emoji: '✈️', texto: 'Chegar na Coreia um dia e não conseguir se comunicar com ninguém' },
      { id: 'D', emoji: '😤', texto: 'Sentir que estudou coreano por anos e não evoluiu de verdade' },
    ],
  },
  {
    id: 14,
    tipo: 'slide',
    bloco: 'implicacao',
    texto: '',
    textoSlide:
      'Se você se identificou com alguma dessas situações, saiba que não é falta de talento nem de dedicação. O que acontece é que tudo que você aprende de coreano hoje. Vocabulários, pronúncias, expressões. Está sendo armazenado na sua memória de curto prazo. E a memória de curto prazo foi feita pra descartar. É assim que o cérebro funciona quando não recebe o estímulo certo.',
  },
  {
    id: 15,
    tipo: 'pergunta',
    bloco: 'solucao',
    texto: 'Pelas suas respostas. Identifico que busca mudar essa situação o mais rápido possível, certo?',
    alternativas: [
      { id: 'A', emoji: '🔥', texto: 'Sim. Não aguento mais depender de legendas para entender a cultura que amo' },
      { id: 'B', emoji: '🌱', texto: 'Quero aprender com calma, mas estou comprometido(a)' },
    ],
  },
  {
    id: 16,
    tipo: 'pergunta',
    bloco: 'solucao',
    texto: 'Se você soubesse exatamente o que fazer pra aprender coreano do jeito certo, você começaria hoje?',
    alternativas: [
      { id: 'A', emoji: '🚀', texto: 'Sim. Estou pronto(a) pra isso agora' },
      { id: 'B', emoji: '✅', texto: 'Sim. Só preciso entender como funciona primeiro' },
      { id: 'C', emoji: '🐢', texto: 'Provavelmente sim, mas com calma' },
    ],
  },
  {
    id: 17,
    tipo: 'pergunta',
    bloco: 'solucao',
    texto: 'Ou seja, se existisse um método que te ajudasse a guardar o coreano na memória de forma natural e duradoura, você estaria disposto(a) a aprender?',
    alternativas: [
      { id: 'A', emoji: '🙌', texto: 'Sim, com certeza. É exatamente o que estou precisando' },
      { id: 'B', emoji: '🔍', texto: 'Sim, mas dependeria de como funciona' },
      { id: 'C', emoji: '🤷', texto: 'Talvez, a depender do método. Mas quero aprender sim!' },
    ],
  },
]
