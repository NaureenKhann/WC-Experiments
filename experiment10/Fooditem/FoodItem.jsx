import React, { useContext , useState} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Storecontext } from '../../context/Storecontext'
//gpt code
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Storecontext)
  const itemCount = cartItems[id] || 0

  return (
    <div className='fooditem'>
      <div className='fooditem-img-container'>
        <img className='fooditem-image' src={image} alt={name} />
        {
          itemCount === 0 ? (
            <img
              src={assets.add_icon_white}
              alt="Add"
              className='add'
              onClick={() => addToCart(id)}
            />
          ) : (
            <div className="fooditemcounter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt="Remove"
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt="Add"
              />
            </div>
          )
        }
      </div>
      <div className="fooditem-info">
        <div className="fooditem-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="fooditem-description">
          {description}
        </p>
        <p className='fooditem-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem