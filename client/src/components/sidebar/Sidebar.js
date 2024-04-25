import React, { useState } from 'react'
import "./sidebar.css"

const Sidebar = () => {

    const [open,setOepn] = useState(false)

  return (
    <aside className={open ? "sidebar open" : "sidebar" } >

    </aside>
  )
}

export default Sidebar