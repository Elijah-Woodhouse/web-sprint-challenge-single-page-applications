import React, { useEffect, useState } from "react";
import HomePage from './components/HomePage';
import Restaurants from './components/Restaurants';
import { Link } from 'react-router-dom';

import data from "./data/data";

function grabData() {
  return Promise.resolve({success: true, data})
}

const App = () => {

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    grabData().then(res => setFoodList(res.data))
  }, [])

  // item-list-wrapper, item-list-image, item-card

  return (
    <>
    <div className='App'>
      <nav>
        <h2 className="header-h2">Lambda Eats</h2>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/help'>Help</Link>
        </div>
      </nav> 
        <HomePage/>
        <Restaurants restaurants={foodList}/>
    </div>
    </>
  );
};
export default App;
