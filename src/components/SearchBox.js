import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
            onChange={searchChange}
            className="pa3 ba b--green bg-lightest-blue" 
            type="text"
            placeholder="Search robots..."
            />
        </div>
    );
}

export default SearchBox;