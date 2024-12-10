'use client'

import { Button } from '@/presentation/components/ui/button'
import { useRegisterGoal } from '@/presentation/store'
import { Plus } from 'lucide-react'

export function RegisterGoalButton() {
  const { setRegisterGoalModalOpen } = useRegisterGoal()

  return (
    <Button type="button" size="sm" onClick={setRegisterGoalModalOpen}>
      <Plus className="size-4 text-violet-50" />
      Cadastrar meta
    </Button>
  )
}
