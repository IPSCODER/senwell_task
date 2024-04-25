import React from 'react'
import { useLocation } from 'react-router-dom'

const ShowImage = () => {
    const {state} = useLocation()
  return (
    <section className='w-full h-full flex align-center justify-center'>
        <img src={state} alt='' className='object-cover' />
    </section>
  )
}

export default ShowImage