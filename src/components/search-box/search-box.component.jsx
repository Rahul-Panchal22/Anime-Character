import React from 'react';

import "./search-box.styles.css"

export const SearchBox = ({placeHolder, handleChange}) => {
    return (
        <div className = "search">
            <input
                className = "input" 
                type="search" 
                placeholder={placeHolder} 
                onChange={handleChange}
            />    
        </div>
    )
}