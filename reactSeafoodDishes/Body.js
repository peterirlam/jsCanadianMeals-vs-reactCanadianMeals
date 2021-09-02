import React, {useEffect, useState} from 'react'
import axios from 'axios'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Body.css'

const Body = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => {
      console.log(res.data); 
      setItems(res.data.meals);
    }).catch(err => {
       console.log(err);
    })
  }, []);

  const itemList = items.map((obj) => {
    return <div className='col-md-3'>
      <p>{obj.strMeal}</p>
      <img src={obj.strMealThumb} className='img-fluid'/>
      <p>{obj.idMeal}</p>
    </div>
  })

  return (
    <div className='row justify-content-center'>
      {itemList}
    </div>
  )
}

export default Body
