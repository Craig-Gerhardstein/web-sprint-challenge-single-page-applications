import React from "react"
import Order from "./Order"
import { Link, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./HomePage"
// import formSchema from "../validation/formSchema"
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required.')
        .min(2, 'Name must be at least 2 characters long'),
    pizzaSize: yup.string()
        .oneOf(['Large', 'Medium', 'Small'])
        .required('Please pick a size'),
    sauce: yup.string().oneOf(['original', 'spicy', 'chunky'])
    .required('Sauce is required'),    
    pepperoni: yup.boolean(),
    sauage: yup.boolean(),
    bacon: yup.boolean(),
    ham: yup.boolean(),
    instructions: yup.string()
})



export default function OrderForm(props) {
    const{ values, submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        validateChange()
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    const validateChange = (e) => {
        yup.reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            console.log("valid");
          })
          .catch((err) => {
            console.log(err);
          });
      }; 
    return(
        <div className='form-container'>
            <h2>Build Your Own Pizza</h2>
            <div className='image-container'>

            </div>
            
            <form className='form-container' onSubmit={onSubmit}>
               
                <h3>Contact Info</h3>
                <label>Name 
                    <input 
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>
                <h3>Choice of Size</h3>
                    <select value={values} name='pizzaSize' onChange={onChange}>
                        <option value=''>--Select Pizza Size--</option>
                        <option value='Large'>Large</option>
                        <option value='Medium'>Medium</option>
                        <option value='Small'>Small</option>
                    </select>
                
                <h3>Choice of Sauce</h3>
                <label>Original
                    <input
                    type='radio'
                    name='sauce'
                    value='original'
                    checked={values}
                    onChange={onChange}
                    />
                </label>
                <label>Spicy
                    <input
                    type='radio'
                    name='sauce'
                    value='spicy'
                    checked={values}
                    onChange={onChange}
                    />
                
                </label>
                <label>Chunky
                    <input
                    type='radio'
                    name='sauce'
                    value='chunky'
                    checked={values}
                    onChange={onChange}
                    />
                </label>
                <h3>Add Toppings</h3>
                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    checked={values}
                    onChange={onChange}
                    />
                </label>
                <label>Bacon
                    <input
                    type='checkbox'
                    name='bacon'
                    checked={values}
                    onChange={onChange}
                    />
                </label>
                <label>Ham
                    <input
                    type='checkbox'
                    name='ham'
                    checked={values}
                    onChange={onChange}
                    />
                </label>
                <p>Special Instructions</p>
                <input 
                type='text'
                name='instructions'
                checked={values}
                onChange={onChange}
                />
                <Link to='./Order'>
                <button disabled={disabled}>Add to Order</button>
                </Link>
                <Route path='./Order'>
                    <Order />
                </Route>



            </form>
            

        </div>

    )
}