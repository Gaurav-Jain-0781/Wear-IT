import React, { useState } from 'react'
import { cartItems } from './Data'
import { FaXmark } from 'react-icons/fa6'
import { BiSad } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'

const Cart = () => {
    const [items, setItems] = useState(cartItems);
    const [quantities, setQuantities] = useState({})
    const handelChange = (id, quantity) => {
        if(quantity == 0){
            handelClick(id)
        }
        setQuantities({...quantities, [id] : quantity || 1})
        console.log(quantities);
    }

    const handelClick = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

    const total = (id) => {
        const selectedItem = items.find((item) => item.id === id)
        const price = selectedItem.price
        const quantity = quantities[id]
        return price * quantity
    }

  return (
    <section id="cart">
        {items.length === 0 ? 
            <ShopNow/> :<>
            <h1>My Cart <FaShoppingCart/></h1>
            <table>
                <thead>
                    <tr>
                        <td>REMOVE</td>
                        <td>IMAGE</td>
                        <td>PRODUCT</td>
                        <td>PRICE</td>
                        <td>QUANTITY</td>
                        <td>SUBTOTAL</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return <tr key={item.id}>
                            <td> <button onClick={() => handelClick(item.id)}> <FaXmark/> </button> </td>
                            <td><img src={item.url} alt={item.name}/></td>
                            <td>{item.name}</td>
                            <td className="price">Rs {item.price}</td>
                            <td><input className="quantity" type="number" value={quantities[item.id] || 1} onChange={(e) => handelChange(item.id, e.target.value)}/></td>
                            <td className="total">Rs. {total(item.id)}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            </>
        }
    </section>
  )
}

const ShopNow = () => {
    return (
        <div className='shopnow'>
            <h2>Cart is empty <BiSad/></h2>
            <button className='normal'><a href=''>Shop Now</a></button>
        </div>
    )
}

export const CartTotal = () => {
    return (
    <section id="cart-add">
        <div id="coupon"> 
            <h2>Apply Coupon</h2>
            <input placeholder="Enter Your Coupon"/>
            <button>Apply</button>
        </div>
        <div id="cart-total">
            <h3>Cart Totals</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td id="sub_total"></td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td id="shipping_charges">10</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong id="cart_total"></strong></td>
                </tr>
            </table>
            <button>Proceed to Checkout</button>
        </div>
    </section>
    )
}

export default Cart
