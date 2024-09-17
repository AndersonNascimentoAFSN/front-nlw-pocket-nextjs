'use client'

import { EmptyGoals } from "@/components/atoms/empty-goals"
import { CreateGoal } from "@/components/molecules/create-goal"
import { Summary } from "@/components/molecules/summary"
import { Dialog } from "@/components/ui/dialog"
import { useGetPendingGoals, useGetSummary } from "@/hooks"

export default function Home() {
  const {
    data: summary,
    // isLoading: isLoadingSummary
  } = useGetSummary()

  const {
    data: pendingGoals,
    // isLoading: isLoadingPendingGoals
  } = useGetPendingGoals()

  return (
    <Dialog>
      {summary && summary?.total > 0
        ? <Summary summary={summary} pendingGoals={pendingGoals} />
        : <EmptyGoals />
      }
      <CreateGoal />
    </Dialog>
  )
}
