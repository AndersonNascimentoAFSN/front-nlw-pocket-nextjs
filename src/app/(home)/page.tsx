import { CreateGoal } from '@/components/molecules/create-goal'
import { SummaryWrapper } from '@/components/organisms/summary-wrapper/summary-wrapper'

export default function Home() {
  return (
    <>
      <SummaryWrapper />

      <CreateGoal />
    </>
  )
}
