'use client'

import { useEffect, useState } from 'react'

const progressMap: Record<number, number> = {
  1: 18, 2: 28, 3: 37, 4: 45, 5: 52, 6: 58, 7: 63, 8: 68,
  9: 72, 10: 75, 11: 78, 12: 81, 13: 83, 14: 85,
  15: 87, 16: 89, 17: 91, 18: 93, 19: 96, 20: 100,
}

const BAR_MAX_HEIGHT = 120

interface SlideInfoProps {
  id: number
  texto: string
  onContinuar: () => void
  numeroPergunta: number
}

/* ─── Barra de progresso compartilhada ─── */
function Barra({ numeroPergunta }: { numeroPergunta: number }) {
  const pct = progressMap[numeroPergunta] ?? 0
  return (
    <div style={{ background: '#C4B5FD', borderRadius: 99, height: 6, width: '100%', marginBottom: 20 }}>
      <div style={{ background: '#5B21B6', borderRadius: 99, height: 6, width: `${pct}%`, transition: 'width 400ms ease' }} />
    </div>
  )
}

/* ─── Botão compartilhado ─── */
function BotaoContinuar({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ width: '100%', background: '#5B21B6', color: '#FFFFFF', fontSize: 17, fontWeight: 700, padding: '18px 0', borderRadius: 50, border: 'none', marginTop: 28, cursor: 'pointer' }}
    >
      Continuar
    </button>
  )
}

/* ─── Slide 1 — "Você sabia?" com gráfico de barras ─── */
function SlideConciencia({ onContinuar, numeroPergunta }: Omit<SlideInfoProps, 'id' | 'texto'>) {
  const [animado, setAnimado] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimado(true), 80)
    return () => clearTimeout(t)
  }, [])

  const barras = [
    { label: 'Após aprender', valor: 100, altura: BAR_MAX_HEIGHT, cor: '#5B21B6' },
    { label: 'Após 72h',      valor: 20,  altura: BAR_MAX_HEIGHT * 0.2, cor: '#C4B5FD' },
  ]

  return (
    <div style={{ maxWidth: 384, margin: '0 auto', width: '100%', padding: '20px 20px 32px', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <Barra numeroPergunta={numeroPergunta} />
      <div className="slide-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#7C3AED', margin: '0 0 10px' }}>Você sabia?</p>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1E0350', lineHeight: 1.2, margin: '0 0 10px' }}>
            Mais de{' '}
            <span style={{ background: '#5B21B6', color: '#FFFFFF', borderRadius: 4, padding: '0 5px' }}>80%</span>
            {' '}das pessoas esquecem o que aprendem
          </h2>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#5B21B6', margin: '0 0 20px' }}>...em menos de 72 horas.</p>
        </div>

        <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 20, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 32, height: BAR_MAX_HEIGHT + 40 }}>
            {barras.map((b) => (
              <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: b.cor }}>{b.valor}%</span>
                <div style={{ height: BAR_MAX_HEIGHT, display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ width: 80, height: animado ? b.altura : 0, background: b.cor, borderRadius: '6px 6px 0 0', transition: 'height 800ms ease-out' }} />
                </div>
                <span style={{ fontSize: 12, color: '#7C3AED', textAlign: 'center', lineHeight: 1.3 }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 17, color: '#4C1D95', lineHeight: 1.5, fontWeight: 400, margin: 0 }}>
          Não é falta de esforço.. e sim, onde esse aprendizado está sendo armazenado na sua{' '}
          <strong style={{ fontWeight: 700 }}>memória</strong>
        </p>
      </div>
      <BotaoContinuar onClick={onContinuar} />
    </div>
  )
}

/* ─── Slide 2 — "Normalização" com ilustração do cérebro ─── */
function SlideNormalizacao({ onContinuar, numeroPergunta }: Omit<SlideInfoProps, 'id' | 'texto'>) {
  return (
    <div style={{ maxWidth: 384, margin: '0 auto', width: '100%', padding: '20px 20px 32px', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <Barra numeroPergunta={numeroPergunta} />
      <div className="slide-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

        {/* Textos hierárquicos */}
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#7C3AED', margin: '0 0 10px', textAlign: 'left' }}>
            Entenda o que está acontecendo
          </p>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1E0350', lineHeight: 1.2, margin: '0 0 6px' }}>
            Não é falta de talento.
          </h2>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#5B21B6', margin: '0 0 16px' }}>
            Nem de dedicação.
          </p>
          <p style={{ fontSize: 16, color: '#1E0350', lineHeight: 1.6, margin: '0 0 20px' }}>
            Tudo que você aprende de coreano hoje. Vocabulários, pronúncias, expressões. Está indo direto para a sua{' '}
            <span style={{ background: '#5B21B6', color: '#FFFFFF', borderRadius: 4, padding: '0 5px' }}>
              memória de curto prazo
            </span>
          </p>
        </div>

        {/* Card com GIF de rede neural */}
        <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 20, marginBottom: 20 }}>
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80"
            alt="Cérebro neural 3D"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80'
            }}
            style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, display: 'block' }}
          />
        </div>

        {/* Frase de fechamento */}
        <p style={{ fontSize: 16, color: '#4C1D95', lineHeight: 1.5, margin: 0 }}>
          Isso faz você aprender hoje e{' '}
          <strong style={{ fontWeight: 800, color: '#5B21B6' }}>esquecer amanhã.</strong>
        </p>
      </div>

      <BotaoContinuar onClick={onContinuar} />
    </div>
  )
}

/* ─── Exportação — roteamento por id ─── */
export default function SlideInfo({ id, texto, onContinuar, numeroPergunta }: SlideInfoProps) {
  if (id === 9)  return <SlideConciencia  onContinuar={onContinuar} numeroPergunta={numeroPergunta} />
  if (id === 15) return <SlideNormalizacao onContinuar={onContinuar} numeroPergunta={numeroPergunta} />
  // fallback genérico (não usado, mas mantém segurança de tipo)
  return (
    <div style={{ maxWidth: 384, margin: '0 auto', width: '100%', padding: '20px 20px 32px', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <Barra numeroPergunta={numeroPergunta} />
      <div className="slide-in" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: 15, color: '#3B0764', lineHeight: 1.6 }}>{texto}</p>
      </div>
      <BotaoContinuar onClick={onContinuar} />
    </div>
  )
}
