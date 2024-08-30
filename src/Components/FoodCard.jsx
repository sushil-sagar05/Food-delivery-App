import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';

function FoodCard({id, name,price, desc, cat,rating,img, handleToast}) {
  const dispatch = useDispatch()
  return (
    <div className=' cursor-pointer font-bold w-[250px]  p-5 flex flex-col rounded-lg gap-2 bg-white mt-6'>
        <img src={img} alt="" 
        className='w-auto h-[130px] '
        />
   <div className='text-sm flex justify-between'>
   <h2>{name}</h2>
   <span className='text-green-500'>{price}</span>
   </div>
   <p className='text-sm font-normal'>{desc.slice(0,50)}</p>
  <div className='flex justify-between'>
  <span className='flex justify-center items-center'>
        <FaStar  className='mr-1 text-yellow-400'/> {rating}
     </span>
     <button
       onClick={()=> {
        dispatch(addToCart({id,name,price, img, qty : 1}))
        handleToast(name)
       }}
     className='bg-green-500 p-1 text-white rounded-lg text-sm'>Add to Cart</button>
        </div>
    </div>
  )
}

export default FoodCard