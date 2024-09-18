import { EmptyGoals } from '@/components/atoms/empty-goals'
import { Summary } from '@/components/molecules/summary'
import { SummaryService, getPendingGoals } from '@/http'

export async function SummaryWrapper() {
  const summary = await SummaryService()
  const pendingGoals = await getPendingGoals()

  return (
    <>
      {summary && summary.summary?.total > 0 ? (
        <Summary summary={summary?.summary} pendingGoals={pendingGoals} />
      ) : (
        <EmptyGoals />
      )}
    </>
  )
}
