'use client'

import { undoGoalCompletedAction } from '@/presentation/actions/undoGoalCompletedAction'
import { Button } from '@/presentation/components/ui/button'
import React from 'react'

export interface UndoGoalCompletedButtonProps {
  goalId: string
}

export function UndoGoalCompletedButton({
  goalId,
}: UndoGoalCompletedButtonProps) {
  return (
    <Button
      variant="link"
      size="xs"
      onClick={async () => await undoGoalCompletedAction(goalId)}
    >
      Desfazer
    </Button>
  )
}
