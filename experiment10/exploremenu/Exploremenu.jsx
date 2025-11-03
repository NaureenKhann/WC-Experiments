import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>
        Discover a variety of delicious meals and snacks available for pre-order.
        Skip the queue and enjoy fresh food, fast service, and great taste every day!
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item' key={index}>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
            <h3>{item.menu_name}</h3>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu