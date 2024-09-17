import { CheckCircle2 } from "lucide-react";
import dayjs from "dayjs";
import ptBR from 'dayjs/locale/pt-br'
import type { PendingGoalsResponse, SummaryResponse } from "@/http";
import { InOrbitIcon } from "@/components/atoms/in-orbit-icon";
import { RegisterGoalButton } from "@/components/atoms/register-goal-button";
import { Progress, ProgressIndicator } from "@/components/ui/progress-bar";
import { Separator } from "@/components/ui/separator";
import { PendingGoals } from "@/components/atoms/pending-goals";
import { Button } from "@/components/ui/button";
dayjs.locale(ptBR)

interface SummaryProps {
  summary: SummaryResponse
  pendingGoals: PendingGoalsResponse | undefined
}

export function Summary({ summary, pendingGoals }: SummaryProps) {

  const firstDayOfWeek = dayjs().startOf('week').format('D MMMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMMM')

  const completedPercentage = Math.round((summary?.completed / summary?.total) * 100)
  // console.log('ok', firstDayOfWeek.replace(/\b\w/g, l => l.toUpperCase()))

  return (
    <div
      className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">
            <span className="capitalize">{firstDayOfWeek}</span> a <span className="capitalize">{lastDayOfWeek}</span></span>
        </div>
        <RegisterGoalButton />
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={summary?.completed} max={summary?.total} >
          <ProgressIndicator
            style={{ width: `${completedPercentage}%` }}
          />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>Você completou <span className="text-zinc-100">{summary?.completed}</span> de <span className="text-zinc-100">{summary?.total}</span> metas nessa semana.</span>
          <span>{completedPercentage}%</span>
        </div>
      </div>

      <Separator />

      <PendingGoals pendingGoals={pendingGoals} />

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>

        {summary?.goalsPerDay && Object?.entries(summary?.goalsPerDay).map(([date, goals]) => {
          const weekDay = dayjs(date).format('dddd')
          const formattedDate = dayjs(date).format('D [de] MMMM')

          return (
            <div key={date} className="flex flex-col gap-4">
              <h3 className="font-medium">
                <span className="capitalize">{weekDay} </span>
                <span className="text-zinc-400 text-xs">
                  ({formattedDate})
                </span>
              </h3>

              <ul className="flex flex-col gap-3">
                {goals.map(goal => {
                  const time = dayjs(goal.completedAt).format('HH:mm')

                  return (
                    <li key={goal.id} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-pink-500" />
                      <span
                        className="text-sm text-zinc-400"
                      >
                        Você completou <span className="text-zinc-100">{goal.title}</span> às <span className="text-zinc-100">{time}h</span>
                      </span>

                      <Button variant="link" size="xs">
                        Desfazer
                      </Button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
