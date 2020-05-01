import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_FULFILLED,
  REQUEST_ROBOTS_REJECTED
} from './constants'

const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state = initialStateRobots, { type, payload }) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_ROBOTS_FULFILLED:
      return Object.assign({}, state, { robots: payload, isPending: false })
    case REQUEST_ROBOTS_REJECTED:
      return Object.assign({}, state, { error: payload, isPending: false })
    default:
      return state
  }
}
