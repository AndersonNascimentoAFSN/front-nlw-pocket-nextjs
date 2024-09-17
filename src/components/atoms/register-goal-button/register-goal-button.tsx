import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

export function RegisterGoalButton() {
  return (
    <DialogTrigger asChild>
      <Button type="button" size="sm">
        <Plus className="size-4 text-violet-50" />
        Cadastrar meta
      </Button>
    </DialogTrigger>
  )
}
