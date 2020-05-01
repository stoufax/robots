import React from 'react'

import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
  return (
    <div className="ph3">
      <input
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue search"
        type="text"
        placeholder="Search robots..."
      />
    </div>
  )
}

export default SearchBox
