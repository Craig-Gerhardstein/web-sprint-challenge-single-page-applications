// import React from 'react'

// export default function Order(props){
//     const {newOrder} = props
//     return(
//         <div className="order-container">
//             <h2>Your Order is Now Being Made</h2>
//             <p>Name: {newOrder.name}</p>
//             <p>Size: {newOrder.pizzaSize}</p>
//             <p>Sauce: {newOrder.sauce}</p>
//             <p>Toppings: {newOrder.topppings}</p>
//             <p>Special Instructions: {newOrder.instructions}</p>
//         </div>
//     )
// }
import React from 'react'
function PizzaCheckout(props) {
const {newOrder} = props
 return (
  <div>
    <h2>Your Order Is Now Being Delivered</h2>
    <p>Name: {newOrder.name}</p>
    <p>Email: {newOrder.email}</p>
    <p>Phone: {newOrder.phone}</p>
    <p>Size: {newOrder.size}</p>
    <p>Sauce: {newOrder.sauce}</p>
    <p>Special Instructions: {newOrder.textarea}</p>
</div>
)}
export default PizzaCheckout