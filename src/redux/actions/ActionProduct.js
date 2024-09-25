import axios from "axios"
import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT, GETONEPRODUCT, GETPRODUCTS } from "../const/products";


export const GetProducts = () => async (dispatch) => {
  try {
    
    const res= await axios.get('https://work-shop-mern-production.up.railway.app/api/product',{
      credentials: 'include'})
   
    dispatch({
        type:GETPRODUCTS,
        payload:res.data
    })
  } catch (error) {
     console.log(error);
}}

export const addProduct = (body,navigate) => async (dispatch) => {
    try {
      const token=document.cookie.split('=')[1]
      const res= await axios.post('https://work-shop-mern-production.up.railway.app/api/product',body,{ headers: { Authorization: `Bearer ${token}` } },{
        credentials: 'include'})
      dispatch({
          type:ADDPRODUCT,
          Payload:res
      })
      dispatch(GetProducts())
      navigate('/')
      
    } catch (error) {
       console.log(error);
  
  }}

export const GetOneProduct=(data,navigate)=>{
  
   navigate(`/edit/${data._id}`)
  return {type:GETONEPRODUCT,payload:data}

}

export const editProduct = (id,data,navigate) => async (dispatch) => {
    try {
      const token=document.cookie.split('=')[1]
      const res= await axios.patch(`https://work-shop-mern-production.up.railway.app/api/product/${id}`,data,{ headers: { Authorization: `Bearer ${token}` } },{
        credentials: 'include'})
      dispatch({
          type:EDITPRODUCT,
          Payload:res
      })   
       dispatch(GetProducts())
      navigate('/')
   
    } catch (error) {
       console.log(error);
  
}}

export const deleteProduct = (id) => async (dispatch) => {
    try {
      const token=document.cookie.split('=')[1]
      const res= await axios.delete(`https://work-shop-mern-production.up.railway.app/api/product/${id}`,{ headers: { Authorization: `Bearer ${token}` } },{
        credentials: 'include'})
      dispatch({
          type:DELETEPRODUCT,
          Payload:res
      })
      dispatch(GetProducts())
    } catch (error) {
       console.log(error);
  
  }}