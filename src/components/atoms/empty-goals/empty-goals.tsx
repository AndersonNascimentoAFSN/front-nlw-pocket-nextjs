import letsStart from '@/assets/lets-start-illustration.svg'
import logo from '@/assets/logo-in-orbit.svg'
import Image from 'next/image'
import { RegisterGoalButton } from '../register-goal-button'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 ">
      <Image src={logo} alt="in.orbit" quality={100} />
      <Image src={letsStart} alt="lets start illustration" quality={100} />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>

      <RegisterGoalButton />
    </div>
  )
}
