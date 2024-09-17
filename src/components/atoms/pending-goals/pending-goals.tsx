import { OutlineButton } from "@/components/ui/outline-button";
import { useCreateGoalCompleted } from "@/hooks";
import type { PendingGoalsResponse } from "@/http";
import { Plus } from "lucide-react";



export interface PendingGoalsProps {
  pendingGoals: PendingGoalsResponse | undefined
}

export function PendingGoals({ pendingGoals }: PendingGoalsProps) {
  const { mutateAsync: createGoalCompleted } = useCreateGoalCompleted()

  function handleCompletedGoal(goalId: string) {
    createGoalCompleted(goalId)
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {pendingGoals?.pendingGoals.map(goal => (
        <OutlineButton
          key={goal.id}
          disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
          onClick={() => handleCompletedGoal(goal.id)}
        >
          <Plus className="size-4 text-zinc-600" />
          {goal.title}
        </OutlineButton>
      ))}
    </div>
  )
}
