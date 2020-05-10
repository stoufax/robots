import React from 'react'

import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
  return (
    <div className="ph3 pb4">
      <input onChange={searchChange} className="search pa3 ba bg-gray-200" type="text" placeholder="Search robots..." />
    </div>
  )
}

export default SearchBox
