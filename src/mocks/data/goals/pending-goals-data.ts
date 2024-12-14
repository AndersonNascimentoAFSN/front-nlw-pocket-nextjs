import type { PendingGoalsResponse } from '@/http'
import { pendingGoals } from '@/mocks/entities/pendingGoals'

export const PendingGoalsData: PendingGoalsResponse = {
  pendingGoals: [
    pendingGoals({
      id: 'odcznb5s2gv2g02vhnggqw2i',
      title: 'exercício físico',
      desiredWeeklyFrequency: 5,
      completionCount: 2,
    }),
  ],
}
