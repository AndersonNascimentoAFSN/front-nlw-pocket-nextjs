import letsStart from '@/assets/lets-start-illustration.svg'
import logo from '@/assets/logo-in-orbit.svg'
import { RegisterGoalButton } from '../register-goal-button'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 ">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="lets start illustration" />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <RegisterGoalButton />
    </div>
  )
}
