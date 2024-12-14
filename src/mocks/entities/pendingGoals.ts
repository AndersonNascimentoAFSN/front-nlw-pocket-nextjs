import type { PendingGoal } from '@/http'

export function pendingGoals(initialValue = {}): PendingGoal {
  return {
    id: '1',
    title: 'Pending Goal 1',
    desiredWeeklyFrequency: 2,
    completionCount: 2,
    ...initialValue,
  }
}
