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

export default formSchema 