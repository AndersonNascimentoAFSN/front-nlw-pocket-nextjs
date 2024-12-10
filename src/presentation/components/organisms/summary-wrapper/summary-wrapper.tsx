import { SummaryService, getPendingGoals } from '@/http'
import { EmptyGoals } from '@/presentation/components/atoms/empty-goals'
import { Summary } from '@/presentation/components/molecules/summary'

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
