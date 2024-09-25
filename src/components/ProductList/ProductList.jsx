import React from 'react'
import Product from '../Product/Product'
import style from './ProductList.module.css'
import { useSelector } from 'react-redux'

function ProductList() {

  
  const data=useSelector(state=>state.ProductReducer.products)
  
  return (
    <div className={style.cards}   >
  {data&&data.map((el)=>  <Product  key={el._id} el={el}  />) }
  
    </div>
  )
}

export default ProductList