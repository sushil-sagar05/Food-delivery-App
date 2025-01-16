import React from 'react'
import CategoryMenu from '../Components/Header/CategoryMenu'
import FoodItems from '../Components/FoodItems'
import Cart from '../Components/Cart'
import Footer from '../Components/Footer'
function Home() {
  return (
    <>
     <div className='bg-[rgb(255 255 255 / 0%)]'>
        <CategoryMenu />
        <FoodItems/>
        <Cart />
    </div>
    <div>
    
    <Footer/>
    </div>
    </>
   
  )
}

export default Home