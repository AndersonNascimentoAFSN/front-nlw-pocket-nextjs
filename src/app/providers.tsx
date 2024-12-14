'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (
  process.env.NEXT_RUNTIME !== 'nodejs' &&
  process.env.NEXT_PUBLIC_MOCK === 'true'
) {
  const { worker } = await import('../mocks/browser')
  await worker.start()
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
