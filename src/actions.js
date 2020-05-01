import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS } from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => ({
  type: REQUEST_ROBOTS,
  payload: fetch('https://jsonplaceholder.typicode.com/users').then((data) => data.json())
})
