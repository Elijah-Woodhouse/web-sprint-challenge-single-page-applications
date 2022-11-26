import React from 'react';

import {
    Route,
    NavLink,
    Switch,
    useParams,
    useRouteMatch
} from 'react-router-dom';


export default function Restaurant(props) {

    return (
        <div className='item-header'>
          <div className='image-wrapper'>
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className='item-title-wrapper'>
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
          </div>
        </div>
    )
    
}