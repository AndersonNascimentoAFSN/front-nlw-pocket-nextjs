import { useQuery } from "@tanstack/react-query";

import { getPendingGoals, type PendingGoalsResponse } from "../../http";

export function useGetPendingGoals() {
  const oneMinute = 1000 * 60

  return useQuery<PendingGoalsResponse>({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: oneMinute * 10,
  })
}