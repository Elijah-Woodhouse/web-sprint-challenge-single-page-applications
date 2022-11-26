import React from 'react';

export default function Restaurants(props) {
    const { restaurants } = props;

    return (
        <div className="restaurant-list-wrapper">
            {restaurants.map(restaurant => (
                <div className="restaurant-card" key={restaurant.id}>
                    <img className='restaurant-list-image' src={restaurant.imageUrl} alt={restaurant.name}/>
                    <h4>{restaurant.name}</h4>
                    <h5>{restaurant.description}</h5>
                    <div className="price-time">
                        <p>{restaurant.time}</p>
                        <p>${restaurant.price} Delivery Fee</p>
                    </div>
                </div>
            ))}
        </div>
    )
}