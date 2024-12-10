'use client'

import type { PendingGoalsResponse } from '@/http'
import { createCompletedAction } from '@/presentation/actions/createCompletedAction'
import { OutlineButton } from '@/presentation/components/ui/outline-button'
import { Plus } from 'lucide-react'

export interface PendingGoalsProps {
  pendingGoals: PendingGoalsResponse | undefined
}

export function PendingGoals({ pendingGoals }: PendingGoalsProps) {
  return (
    <div className="flex gap-3 flex-wrap">
      {pendingGoals?.pendingGoals.map(goal => (
        <OutlineButton
          key={goal.id}
          disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          onClick={async () => await createCompletedAction(goal.id)}
        >
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
