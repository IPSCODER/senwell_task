import React, { useState } from 'react'

const ScrollTopBottom = () => {

    const [scrollPosition,setScrollPosition] = useState(0)

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }

    const scrollToTop = () =>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

  return (
    <div>
        <button onClick={scrollToTop} >Scroll To Top</button>
    </div>
  )
}

export default ScrollTopBottom