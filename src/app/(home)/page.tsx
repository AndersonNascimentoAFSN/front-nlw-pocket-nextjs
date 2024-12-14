import { PendingGoalsClientSide } from '@/components/atoms/pending-goals-client-side/PedingGoalsClientSide'
import { CreateGoal } from '@/components/molecules/create-goal'
import { SummaryWrapper } from '@/components/organisms/summary-wrapper/summary-wrapper'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <PendingGoalsClientSide />
      <Suspense fallback={<div>Loading...</div>}>
        <SummaryWrapper />
      </Suspense>

      <CreateGoal />
    </>
  )
}
