import { create } from 'zustand'

import { immer } from 'zustand/middleware/immer'

import { setAutoFreeze } from 'immer'

setAutoFreeze(false)

interface RegisterGoalState {
  registerGoalModalOpen: boolean
  setRegisterGoalModalOpen: () => void
}

const registerGoalStore = create<RegisterGoalState>()(
  immer(set => ({
    registerGoalModalOpen: false,

    setRegisterGoalModalOpen: () =>
      set(state => {
        state.registerGoalModalOpen = !state.registerGoalModalOpen
      }),
  }))
)

export const useRegisterGoal = registerGoalStore
