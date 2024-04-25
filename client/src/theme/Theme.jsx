import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Theme = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(()=>{
    localStorage.getItem("email") ? navigate("/") : navigate("/auth");
  },[localStorage.getItem("email")])

  return (
    <>
    <Sidebar/>
    {(localStorage.getItem("email") && location.pathname !== "/auth") && <Header/>}
    <Outlet/>
    </>
  )
}

export default Theme