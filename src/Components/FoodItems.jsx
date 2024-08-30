import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/Fooddata'
import toast,{Toaster} from 'react-hot-toast'
import { useSelector } from 'react-redux'

function FoodItems() {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)
  console.log(search)
  const handleToast = (name) =>  toast.success(`added ${name}`)
  return (
  <>
  <Toaster position='top-center' reverseOrder={false} />
  <div className='flex flex-wrap gap-10  '>
      {FoodData.filter((food) => {
        if(category === "All") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        }
        else{
          return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
        }
      }).map ((food) => (  <FoodCard 
        key = {food.id}
        id = {food.id}
        name = {food.name}
        price = {food.price}
        desc = {food.desc}
        img = {food.img}
        cat = {food.category}
        rating = {food.rating}
        handleToast = {handleToast}
        />

      ))
      }
    </div>
    </>
  )
}

export default FoodItems