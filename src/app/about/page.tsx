import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SSA Hunter Valley',
  description: 'Learn about Signature Slam Academy Hunter Valley — the first one-stop tennis academy in Asia Pacific.',
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
      <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
      <p className="mt-3 text-gray-500">Coming soon</p>
    </main>
  )
}
