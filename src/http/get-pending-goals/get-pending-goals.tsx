import { env } from "@/env";

export interface PendingGoalsResponse {
  pendingGoals: {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
  }[];
}

export function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response: Promise<PendingGoalsResponse> =
    fetch(`${env.NEXT_PUBLIC_API_URL}/pending-goals`)
      .then((response) => response.json())
      .then((data: PendingGoalsResponse) => data)

  return response
}