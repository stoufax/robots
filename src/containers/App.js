import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = {
  onSearchChange: (event) => setSearchField(event.target.value),
  requestRobots
}

const App = ({ searchField, onSearchChange, requestRobots, robots, isPending }) => {
  useEffect(() => {
    requestRobots()
  }, [requestRobots])

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return isPending ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <div className="overflow-hidden fixed w-full z-10 bg-gray-100 shadow">
        <h1 className="f1-ns f2">RobotFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
      <CardList robots={filterRobots} />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
