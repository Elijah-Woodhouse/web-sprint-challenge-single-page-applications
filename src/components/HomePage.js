import React from "react";
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory();

    const routeToPizza = () => {
        console.log('submitting...')
        history.push('/pizza')
    }

    return (
        <div>
            <nav>
                <h2 className="header-h2">Food Dude</h2>
                <div className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/help'>Help</Link>
                </div>
            </nav>
            <img
            id="image-container"
            className="home-top-image"
            src="https://media.guestofaguest.com/t_article_content/gofg-media/2017/10/1/49879/e1.jpg"
            alt="image of kitchen"
            />
            <button onClick={routeToPizza} id="order-pizza" className="pizza-button md-button">Order Pizza</button>
        </div>
    )












}