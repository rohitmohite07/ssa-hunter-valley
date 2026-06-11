import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amenities | SSA Hunter Valley',
  description: 'Discover world-class facilities including tennis courts, accommodation, fitness, and recovery at SSA.',
}

export default function AmenitiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <h1 className="text-4xl font-bold text-gray-900">Amenities</h1>
      <p className="mt-3 text-gray-500">Coming soon</p>
    </main>
  )
}
