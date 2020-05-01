import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS } from './constants'
import { backend } from './services'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => ({
  type: REQUEST_ROBOTS,
  payload: backend.fetchRobots()
})
