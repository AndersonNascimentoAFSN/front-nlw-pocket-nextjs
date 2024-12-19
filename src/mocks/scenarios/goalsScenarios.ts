import { http, HttpResponse } from 'msw'
import { PendingGoalsData } from '../data/goals/pending-goals-data'

export const goalsScenarios = {
  success: [
    http.get('*/pending-goals', () => {
      return HttpResponse.json(PendingGoalsData, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }),
  ],
  error: [
    http.get('*/pending-goals', () => {
      return HttpResponse.json(null, {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }),
  ],
}
