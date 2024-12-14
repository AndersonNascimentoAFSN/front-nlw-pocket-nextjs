import { PendingGoal, type SummaryType } from '@/http'

export function summary(initialValue = {}): SummaryType {
  return {
    completed: 0,
    total: 0,
    goalsPerDay: {
      '2024-12-14': [
        {
          id: 'f21kxn67q5hk79h83ljn57zy',
          title: 'exercício físico',
          completedAt: '2024-12-14T21:08:30.656085+00:00',
        },
        {
          id: 'xhiisplr40lb9d3ejfayogm4',
          title: 'exercício físico',
          completedAt: '2024-12-14T21:08:28.791122+00:00',
        },
      ],
    },
    ...initialValue,
  }
}
