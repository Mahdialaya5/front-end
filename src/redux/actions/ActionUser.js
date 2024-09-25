import axios from "axios";
import { GET_CURRENT_FAIL, GET_CURRENT_SUCCESS, LOGINFAILED, REGISTER, REGISTERFAILED } from "../const/user"

export const register = (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/user/register',body)
      console.log(res.data)
      dispatch({
          type:REGISTER,
          payload:res.data
      })
      navigate('/login')
    } catch (error) {
        dispatch({
            type:REGISTERFAILED,
            payload:error.response.data.errors
})}}

export const login= (body,navigate) => async (dispatch) => {
    try {
      const res= await axios.post('http://localhost:4000/api/user/login',body,{ 
        withCredentials: true 
     })
   
     navigate('/profil')
     
    } catch (error) {
      dispatch({
        type:LOGINFAILED,
        payload:error.response.data
    })
 }} 

 export const getCurrent = () => async (dispatch) => {
  
  const token=document.cookie.split('=')[1]

  try {
    const res = await axios.get('http://localhost:4000/api/user/', { headers: { Authorization: `Bearer ${token}` } })
      dispatch({ type: GET_CURRENT_SUCCESS, payload: res.data })
      
  } catch (error) {
      
      dispatch({ type: GET_CURRENT_FAIL, payload: error })
  }}

