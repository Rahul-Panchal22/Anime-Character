import React from 'react'

import './card.styles.css'

export const Card = (props)=>{
    return(
        <div className="card-container">
            <img alt="ataksuki" src={props.ataksukis.image}/>
            <h1>{props.ataksukis.name}</h1>
        </div>
    )
}