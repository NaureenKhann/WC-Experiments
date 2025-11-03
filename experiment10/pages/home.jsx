import './Home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/exploremenu/Exploremenu'
import React, { useState } from 'react'
import FoodDisplay from '../../components/fooddisplay/FoodDisplay'
import App from '../../App'
import AppDownload from '../../components/appdownload/AppDownload'
const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
