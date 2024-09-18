import { env } from '@/env'

export interface PendingGoalsResponse {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export function getPendingGoals(): Promise<PendingGoalsResponse> {
  const oneMinute = 60 * 1000

  const response: Promise<PendingGoalsResponse> = fetch(
    `${env.API_URL}/pending-goals`,
    {
      next: {
        revalidate: oneMinute * 5,
        tags: ['pending-goals'],
      },
    }
  )
    .then(response => response.json())
    .then((data: PendingGoalsResponse) => data)
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve({
        pendingGoals: [],
      })
    })

  return response
}
