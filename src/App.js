import React, { useEffect, useState } from "react";
import HomePage from './components/HomePage';
import Restaurants from './components/Restaurants';
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from "./components/PizzaForm";
import schema from './validation/formSchema';
import * as yup from 'yup';
import data from "./data/data";
import axios from "axios";

const initialFormValues = {
  size: "",
  sauce: "",
  toppings: "",
  substitute: false,
  special: "",
  quantity: "",
  Pepperoni: false, 
  Sausage: false, 
  Canadian_Bacon: false, 
  Spicy_Italian_Sausage: false, 
  Grilled_Chicken: false, 
  Onion: false, 
  Green_Peppers: false, 
  Diced_Tomatoes: false, 
  Black_Olives: false, 
  Roasted_Garlic: false, 
  Artichoke_Hearts: false, 
  Three_Cheese: false, 
  Pineapple: false, 
  Extra_Cheese: false
}

const initialFormErrors = {
  size: '',
  sauce: '',
  toppings: '',
  quantity: '',
  substitute: '',
}

const initialDisabled = true;

function grabData() {
  return Promise.resolve({success: true, data})
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [foodList, setFoodList] = useState([]);
  const [orders, setOrder] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleError = err => {debugger};



  const resetForm = () => {
    setFormValues(initialFormValues);
  }


  const postOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
    .then( res => {
      console.log(res.data);
      setOrder([ res.data, ...orders])
    })
    .catch(err => console.error(err))
  }



  useEffect(() => {
    grabData().then(res => setFoodList(res.data))
  }, [])



  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }


  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }
  

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: formValues.toppings.trim(),
      substitute: formValues.substitute.trim(),
      special: formValues.special.trim(),
      quantity: formValues.quantity.trim()
    }
    postOrder(newOrder);
  }
  // item-list-wrapper, item-list-image, item-card

  return (
    <>
    <div className='App'> 
        <Switch>
          <Route path="/PizzaForm">
            <PizzaForm 
            image={foodList}
            change={onChange}
            values={formValues}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
            />
          </Route>

          <Route path="/">
            <HomePage/>  
            <Restaurants restaurants={foodList}/>
          </Route>   
        </Switch>
    </div>
    </>
  );
};



export default App;
