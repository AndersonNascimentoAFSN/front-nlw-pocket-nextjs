import { http, HttpResponse } from 'msw'
import { PendingGoalsData } from '../data/goals/pending-goals-data'
import { summaryData } from '../data/summary/summary-data'

export const goalsDomain = [
  http.get('*/pending-goals', () => {
    return HttpResponse.json(PendingGoalsData)
  }),
  http.get('*/week-summary', () => {
    return HttpResponse.json(summaryData)
  }),
]
