'use client'

const progressMap: Record<number, number> = {
  1:  18,
  2:  28,
  3:  37,
  4:  45,
  5:  52,
  6:  58,
  7:  63,
  8:  68,
  9:  72,
  10: 75,
  11: 78,
  12: 81,
  13: 83,
  14: 85,
  15: 87,
  16: 89,
  17: 91,
  18: 93,
  19: 96,
  20: 100,
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
