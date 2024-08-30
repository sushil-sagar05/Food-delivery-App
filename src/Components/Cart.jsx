import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import ItemCard from './ItemCard'
import {useSelector,useDispatch} from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { clearCart } from '../Redux/Slices/CartSlice';


function Cart() {
  const dispatch = useDispatch()
  const[activeCart, setactiveCart] = useState(false)
  const cartItems = useSelector((state) => state.cart.cart)
  const totalqty = cartItems.reduce((totalqty, item) => totalqty + item.qty, 0 )
  const totalPrice = cartItems.reduce((totalPrice,item) => totalPrice+ item.qty * item.price, 0)
  const ClearCart = () => {dispatch(clearCart())}
  return (
    <>
    <div className={`fixed p-5 right-0 top-0 w-[20vw] h-full bg-white ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <IoMdClose 
            onClick={()=> setactiveCart(!activeCart)}
            className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md cursor-pointer hover:tet-red-300 hover:border-red-300'/>
        </div>
      {cartItems.length > 0 ? cartItems.map((food) => {
        return <ItemCard key={food.id} id= {food.id} name={food.name} price={food.price} img={food.img} qty={food.qty}/>
      }) : <h2 className='text-center text-xl font-bold text-gray-800' >Your Card is empty </h2>}
        
        <div className='absolute bottom-0'>
            <h3 className='font-semibold text-gray-800'>Items:{totalqty} </h3>
            <h3  className='font-semibold text-gray-800'> Total Ammount :{totalPrice} </h3>
            <hr className='w-[18vw] my-2' />
            <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[18vw] mb-5 '> Checkout</button>
        </div>
        {cartItems.length>0 ?  <button 
           onClick={() => ClearCart()}
               className='bg-green-500 font-bold px-3 text-white py-2 my-3 rounded-lg w-[8vw] mb-5'>Clear Cart</button> : ""}
       
    </div>
    <FaShoppingCart 
    onClick={()=> setactiveCart(!activeCart)}
    className={`rounded-full bg-white shadow-md  cursor-pointer hover:bg-yellow-400  text-5xl p-3 fixed top-[33px] right-[3.5rem] ${totalqty > 0 && "animate-bounce delay-500 transition-all" }`}/>
    </>
  )
}

export default Cart