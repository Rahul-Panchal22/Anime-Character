import React from 'react';

import { Card } from '../card/card.component'

import './card-list.style.css'

export const CardList = (props)=>{
    return (
        <div className='card-list'>
          {props.detail.map(ataksuki => <Card key={ataksuki.id} ataksukis = {ataksuki}/>)}
        </div>

    )
}