'use client'

const progressMap: Record<number, number> = {
  1:  22,
  2:  33,
  3:  42,
  4:  50,
  5:  57,
  6:  63,
  7:  68,
  8:  73,
  9:  77,
  10: 81,
  11: 85,
  12: 88,
  13: 91,
  14: 95,
  15: 100,
}

interface BarraProgressoProps {
  numeroPergunta: number
}

export default function BarraProgresso({ numeroPergunta }: BarraProgressoProps) {
  const porcentagem = progressMap[numeroPergunta] ?? 0

  return (
    <div style={{ width: '100%', padding: '20px 20px 12px' }}>
      <div
        style={{
          background: '#C4B5FD',
          borderRadius: 99,
          height: 6,
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#5B21B6',
            borderRadius: 99,
            height: 6,
            width: `${porcentagem}%`,
            transition: 'width 400ms ease',
          }}
        />
      </div>
    </div>
  )
}
