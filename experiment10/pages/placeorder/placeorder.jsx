import React from 'react';
import './Placeorder.css';
import { Storecontext } from '../../context/Storecontext';

const Placeorder = () => {
  const { getTotalCartAmount } = React.useContext(Storecontext);

  return (
    <div className='placeorder'>
      {/* LEFT SECTION */}
      <div className="placeorder-left">
        <p>Order Information</p>
        <div className="multi">
          <input type="text" placeholder='Name' />
        </div>
          <input type="text" placeholder='RollNo' />
          <input type="text" placeholder='Department' />
          <input type="text" placeholder='Year' />
          <input type="text" placeholder='Phone-Number' />
      </div>

      {/* RIGHT SECTION */}
      <div className='placeorder-right'>
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
            <button>Proceed to Payment Method</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
