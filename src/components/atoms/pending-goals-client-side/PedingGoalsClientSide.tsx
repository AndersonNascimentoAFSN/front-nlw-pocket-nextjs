'use client'

import { createCompletedAction } from '@/actions/createCompletedAction'
import { OutlineButton } from '@/components/ui/outline-button'
import { useGetPendingGoals } from '@/hooks'
import { Plus } from 'lucide-react'

// if (process.env.NEXT_RUNTIME !== "nodejs") {
//   const { worker } = await import("../../../mocks/browser");
//   await worker.start();
// }

export function PendingGoalsClientSide() {
  const { data: pendingGoals } = useGetPendingGoals()

  console.log('pendingGoals', pendingGoals)

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
