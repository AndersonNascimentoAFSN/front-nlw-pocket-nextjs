import { CreateGoal } from '@/presentation/components/molecules/create-goal'
import { SummaryWrapper } from '@/presentation/components/organisms/summary-wrapper/summary-wrapper'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SummaryWrapper />
      </Suspense>

      <CreateGoal />
    </>
  )
}
