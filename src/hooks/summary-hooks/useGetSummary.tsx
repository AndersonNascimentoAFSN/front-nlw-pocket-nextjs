'use client'

import { useQuery } from "@tanstack/react-query";

import { SummaryService, type SummaryResponse } from "../../http";

export function useGetSummary() {
  const oneMinute = 1000 * 60

  return useQuery<SummaryResponse>({
    queryKey: ['summary'],
    queryFn: SummaryService,
    staleTime: oneMinute * 10,
  })
}