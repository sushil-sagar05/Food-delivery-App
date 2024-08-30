import React from 'react'
import CategoryMenu from '../Components/Header/CategoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'

function Home() {
  return (
    <div className='bg-[rgb(255 255 255 / 0%)]'>
        <CategoryMenu />
        <FoodItems/>
        <Cart />
    </div>
  )
}

export default Home