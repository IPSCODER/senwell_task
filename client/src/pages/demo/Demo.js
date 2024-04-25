import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ScrollTopBottom from '../../components/ScrollToTopBottom/ScrollTopBottom';

const Demo = () => {
  return (
    <>
    <section className='w-full h-[100vh] border-2 border-solid border-[#111] px-[3%] py-[1%] flex gap-20 flex-wrap' >
        <div className='w-[200px] h-[200px] bg-black' >

        </div>
        <div className='w-[200px] h-[200px] bg-black' >

        </div>
        <div className='w-[200px] h-[200px] bg-black' >

        </div>
        <div className='w-[200px] h-[200px] bg-black' >

        </div>
        <div className='w-[200px] h-[200px] bg-black' >

        </div>
        <div className='w-[200px] h-[200px] bg-black' >

        </div>
        <div className='w-[200px] h-[200px] bg-black hover:bg-slate-500 sm:bg-slate-950' >

        </div>
    </section>
    <section className='w-full min-h-[100vh] border-2 border-solid border-[#111] px-[3%] py-[1%] flex gap-20 flex-wrap' >
        
        <Carousel className='w-full h-[70vh]' >
        <div className='h-[70vh] object-cover' >
                    <img className='object-cover' src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='h-[70vh] object-cover' >
                    <img src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className='h-[70vh] object-cover' >
                    <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
        </Carousel>

    </section>
    <section className='w-full h-[100vh] border-2 border-solid border-black p-10' >
    </section>
    <ScrollTopBottom/>
    </>
  )
}

export default Demo