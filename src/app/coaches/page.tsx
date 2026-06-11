import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaches | SSA Hunter Valley',
  description: 'Meet the world-class coaching staff at Signature Slam Academy Hunter Valley.',
}

export default function CoachesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <h1 className="text-4xl font-bold text-gray-900">Coaches</h1>
      <p className="mt-3 text-gray-500">Coming soon</p>
    </main>
  )
}
