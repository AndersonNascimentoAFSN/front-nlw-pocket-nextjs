import type { SummaryResponse } from '@/http'
import { summary } from '@/mocks/entities/summary'

export const summaryData: SummaryResponse = {
  summary: summary({
    completed: 2,
    total: 5,
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
  }),
  lastUpdate: null,
  cacheHeader: null,
}
