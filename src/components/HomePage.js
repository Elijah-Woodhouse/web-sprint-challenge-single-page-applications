import React from "react";

import { useHistory } from 'react-router-dom';

export default function HomePage() {
    const history = useHistory();

    const routeToPizza = () => {
        console.log('submitting...')
        history.push('/order-pizza')
    }

    return (
        <div >
            <img
            id="image-container"
            className="home-top-image"
            src="https://media.guestofaguest.com/t_article_content/gofg-media/2017/10/1/49879/e1.jpg"
            alt="image of kitchen"
            />
            <button className="pizza-button md-button">Order Pizza</button>
        </div>
    )












}