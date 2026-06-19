import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'QI Coreano',
  description: 'Descubra seu perfil de aprendizado de coreano',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} bg-[#EDE9FE] min-h-full`}>{children}</body>
    </html>
  )
}
