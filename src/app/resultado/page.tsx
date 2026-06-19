import { Suspense } from 'react'
import ResultadoConteudo from './ResultadoConteudo'

export default function ResultadoPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-roxo-claro border-t-roxo-medio rounded-full animate-spin" />
      </div>
    }>
      <ResultadoConteudo />
    </Suspense>
  )
}
