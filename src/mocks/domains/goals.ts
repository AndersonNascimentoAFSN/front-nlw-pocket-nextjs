import type { PendingGoalsResponse } from '@/http'
import { http, HttpResponse } from 'msw'
import { PendingGoalsData } from '../data/goals/pending-goals-data'
import { summaryData } from '../data/summary/summary-data'

type Params = never
type RequestBody = never

export const goalsDomain = [
  http.get<Params, RequestBody, PendingGoalsResponse>(
    '*/pending-goals',
    ({ params, request }) => {
      return HttpResponse.json(PendingGoalsData, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  ),
  http.get('*/week-summary', () => {
    return HttpResponse.json(summaryData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }),
]
