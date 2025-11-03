import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../context/Storecontext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({  category={selectedCategory} }) => {
  const { food_list } = useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes for Today</h2><br />
      <div className='food-display-list'>
        {food_list && food_list.length > 0 ? (
          food_list.map((item, index) => {
            if (category === "All" || item.category === category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            }
            return null
          })
        ) : (
          <p>No food items available.</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
