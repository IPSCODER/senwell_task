import React from 'react'
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header >
      <h1><Link to={"/"} >Logo</Link></h1>
      <h2 onClick={() => {localStorage.clear(); navigate("/auth")}} >Logout</h2>
    </header>
  )
}

export default Header