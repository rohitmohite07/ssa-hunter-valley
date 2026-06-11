import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matches | SSA Hunter Valley',
  description: 'Live scores and ongoing matches at Signature Slam Academy Hunter Valley.',
}

export default function MatchesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <h1 className="text-4xl font-bold text-gray-900">Matches</h1>
      <p className="mt-3 text-gray-500">Coming soon</p>
    </main>
  )
}
