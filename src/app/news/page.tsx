import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | SSA Hunter Valley',
  description: 'Latest news and updates from Signature Slam Academy Hunter Valley.',
}

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <h1 className="text-4xl font-bold text-gray-900">News</h1>
      <p className="mt-3 text-gray-500">Coming soon</p>
    </main>
  )
}
