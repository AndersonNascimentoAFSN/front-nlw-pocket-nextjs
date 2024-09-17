'use client'

import { EmptyGoals } from '@/components/atoms/empty-goals'
import { Summary } from '@/components/molecules/summary'
import { useGetPendingGoals, useGetSummary } from '@/hooks'

export function SummaryWrapper() {
  const { data: summary } = useGetSummary()

  const { data: pendingGoals } = useGetPendingGoals()

  return (
    <>
      {summary && summary?.total > 0 ? (
        <Summary summary={summary} pendingGoals={pendingGoals} />
      ) : (
        <EmptyGoals />
      )}
    </>
  )
}
