
import React, { useEffect, useState} from "react";
import { Link, Route, BrowserRouter as Router} from "react-router-dom";
// import pizza from "..../Assets/Pizza.jpg"
import OrderForm from "./PizzaForm"
import * as yup from 'yup'
import formSchema from '../validation/formSchema.js'
import axios from 'axios'

const initialFormValues = {
    name: '',
    pizzaSize: '',
    sauce: '',
    pepperoni: false,
    sausage:  false,
    bacon:  false,
    ham:  false,
  
  
  }
  const initialFormErrors = {
    name: '',
    pizzaSize: '',
    sauce: ''
  }

  const initialPizza = []
  const initialDisabled = true


export default function Home(){
    const [pizza, setPizza] = useState(initialPizza)
    const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const getPizza = () => {
      axios.get('https://reqres.in/api/')
      .then(res => {
        setPizza(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }


  const postNewPizza = newPizza => {
      axios.post('https://reqres.in/api/', newPizza)
      .then(res => {
          setPizza([res.data, ...pizza])
          
      })
      .catch(err => {
          console.log(err);
      })
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        // happy path
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
      const newPizza = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperroni', 'sausage', 'bacon', 'ham' ].filter(topping => formValues[topping])
      }
      postNewPizza(newPizza)

  }
  useEffect(() =>{
      getPizza()
  }, [])

  useEffect(() => {
      formSchema.isValid(formValues).then(valid => {setDisabled(!valid)}
      )
  }, [formValues])

    return(
        <div className='home-container'>
            <div className="main-title">
                <h1>Fast Delivery </h1>
                {/* <img className="headerImg" src={pizza} alt="pizzaImg"></img> */}
                <Link to='./PizzaForm'>
                    <button id="orderBtn">Pizza</button>
                </Link>
                <Route path='./PizzaForm' >
                    <OrderForm
                     values={formValues}
                     submit={formSubmit}
                     change={inputChange}
                     disabled={disabled}
                     errors={formErrors}
                     />
                </Route>    
            </div>
        </div>
    )
}