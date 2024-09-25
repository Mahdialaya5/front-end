import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrent } from '../../redux/actions/ActionUser'
import { deleteProduct, GetOneProduct } from '../../redux/actions/ActionProduct'
import { useNavigate } from 'react-router-dom'
import style from "../Product/Product.module.css";
function Profil() {
  
 const dispatch=useDispatch()
 const navigate=useNavigate()

  useEffect(() => {
  
    dispatch(getCurrent())
  
  }, [])
  
  const user=useSelector(state=>state.UserReducer.currentuser)
  const products=useSelector(state=>state.ProductReducer.products)
 console.log(user);
  const productsbyuser=products.filter(el=>el.seller._id==user._id)
  console.log(productsbyuser);
  return (
    <div>
    <h3>username:{user.username}</h3>
     <p>email:{user.email}</p>
     <div>
    { productsbyuser&&productsbyuser.map((el)=>  <div key={el._id}  className={style.card}>
      <img src={el.img}  className={style.img}  />
      <div className={style.content}   >
        <h3>name:{el.name}</h3>
        <p>description:{el.description}</p>
        <p>price:{el.price}</p>
        <p>category:{el.category}</p>
        <p>date:{el.date.slice(0,10)}</p>
        <button  onClick={()=>dispatch(deleteProduct(el._id))} >delete</button>
      <button onClick={()=>dispatch(GetOneProduct(el,navigate))}  >Edit</button>
      </div>
    </div>)}
     </div>
      </div>
  )
}

export default Profil