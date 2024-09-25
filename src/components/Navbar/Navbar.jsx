import React from "react";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate=useNavigate()
   const token=document.cookie.split('=')[1]

const logout=()=>{

   document.cookie="token= "
   
  if (window.location.pathname!=='/') {
    navigate('/')
    window.location.reload()
  }
}

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
         <Link to='/' > <button className={style.btn}>Home</button></Link>
        </li>
      {!token ?<> <li>
         <Link to='/login'   ><button className={style.btn}>login</button></Link> 
        </li>
        <li>
         <Link to='/register' > <button className={style.btn}> register</button> </Link>
        </li></>:null}
    {token ?<> <li>
         <Link to='/profil' > <button className={style.btn}> profil</button> </Link>
        </li>
        <li>
         <Link to='/addproduct' > <button className={style.btn}> addproduct</button> </Link>
        </li>
        <li>
         <button className={style.btn} onClick={logout}  > logout</button> 
        </li></>:null}
      </ul>
    </nav>
  );
}

export default Navbar;
