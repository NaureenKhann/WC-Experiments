import React from 'react'
import './Cart.css'
import { Storecontext } from '../../context/Storecontext';
import { assets} from '../../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = React.useContext(Storecontext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cartitems">
        <div className="cartitems-title">
           <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){

            return ( 

            <div className='cartitems-title cartitems-item' key={item._id}> 
                   <img className='food' src={item.image} alt="" />
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>${item.price*cartItems[item._id]}</p>
                 
                   <img
                                   onClick={() => removeFromCart(item._id)}
                                   src={assets.remove_icon_red}
                                   alt="Remove"
                                 />
            </div>
            )
          }
        })}
      </div>
      <div className="cartbottom">
        <div className="carttotal">
          <h2>Cart Totals</h2>
          <div className="cartdetail">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
          <div className="cartdetail">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:10}</p>
          </div>
          <hr />
          <div className="cartdetail">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+10}</b>
          </div>
          <button onClick={()=>navigate('/placeorder')}>Proceed to Pre-Order</button>
        </div>
         
      </div>
      <div className="cartpromo">
        <div>
          <p>If you have a promo-code , Enter it here</p>
          <div className="promoinput">
            <input type="text" placeholder='promo-code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
