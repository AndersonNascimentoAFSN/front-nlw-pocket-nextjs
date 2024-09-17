import { env } from '@/env'

export type GoalsPerDayType = Record<
  string,
  Array<{
    id: string
    title: string
    completedAt: Date
  }>
>

export interface SummaryResponse {
  completed: number
  total: number
  goalsPerDay: GoalsPerDayType | null
}

export function SummaryService(): Promise<SummaryResponse> {
  const response: Promise<SummaryResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/week-summary`
  )
    .then(response => response.json())
    .then((data: { summary: SummaryResponse }) => data?.summary)

  return response
}
