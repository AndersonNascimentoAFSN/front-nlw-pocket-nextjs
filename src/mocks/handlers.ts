import { goalsDomain } from './domains/goals'
import { goalsScenarios } from './scenarios/goalsScenarios'

const scenarioName = new URLSearchParams(window.location.search).get(
  'scenario'
) as 'success' | 'error'
const runtimeScenarios = goalsScenarios[scenarioName] || []

export const handlers = [...runtimeScenarios, ...goalsDomain]
