import { ActionType } from 'redux-promise-middleware'

export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD'

export const REQUEST_ROBOTS = 'REQUEST_ROBOTS'
export const REQUEST_ROBOTS_PENDING = `${REQUEST_ROBOTS}_${ActionType.Pending}`
export const REQUEST_ROBOTS_FULFILLED = `${REQUEST_ROBOTS}_${ActionType.Fulfilled}`
export const REQUEST_ROBOTS_REJECTED = `${REQUEST_ROBOTS}_${ActionType.Rejected}`
