import React, { useState } from 'react'
import style from './login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/ActionUser'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  
 const [email, setemail] = useState('')
 const [password, setpassword] = useState('')
 const disptach=useDispatch()
 const navigate=useNavigate()
 const error=useSelector(state=>state.UserReducer.error)
 
 const handlesubmit=(e)=>{
  e.preventDefault()
  disptach(login({email,password},navigate))
 }

  return (
<form  className={style.form} onSubmit={handlesubmit}  >
     <label>email</label>
     <input className={style.input}  onChange={(e)=>setemail(e.target.value)}   />
     <label>password</label>
     <input type='password' autoComplete="on" className={style.input}   onChange={(e)=>setpassword(e.target.value)}   />
    <button className={style.btn}  >submit</button>
  {error.errors&&error.errors[0].msg?<p>{error.errors[0].msg}</p>:error.msg&&error.msg?<p>{error.msg}</p>:null}
    </form>
  )
}

export default LoginForm