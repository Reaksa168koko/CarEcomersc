import React, { useEffect, useRef } from 'react'
import banner1 from '../../assets/image/bannercar-1.jpg'
import Typed from 'typed.js';
const Banner = () => {
      const el = useRef(null);
          useEffect(() => {
           if (!el.current) return;
           
        const typed = new Typed(el.current, {
          strings: ["Drive in style.", "Luxury SUVs available.", "Reserve your spot today!"],
          typeSpeed: 100,
          backSpeed: 50,
          loop: true,
        });
    
        return () => typed.destroy();
      }, []);
    
  return (
    <div>
        {/* banner */}
      <div className='w-full lg:h-[910px] h-[750px] bg-black'>
        <div className='overflow-hidden'>
                  <img src={banner1} alt="" className='w-full h-full object-cover absolute ' />
        </div>
        
          <div className='relative lg:px-40 px-7 lg:w-1/2 h-full  '>
              <div className='w-full h-full flex justify-center flex-col'>
               <h1 className=' lg:text-6xl text-5xl text-white font-bold '>THIS VEHICLE CAN BE ANYTHING.</h1>
                <span ref={el} className="text-white text-2xl lg:text-4xl font-bold mt-4"></span>
               
              <p className=' text-white lg:text-4xl text-3xl mt-4 '>EVEN AN SUV.</p>
              <p className='font-bold text-white mt-4 lg:text-xl'>Reserve now for <span className='text-rose-500'>$50</span> and lock your spot.</p>
               <button className='uppercase lg:px-4 mt-3 lg:py-3 py-2  bg-red-500 rounded-md text-white font-bold hover:bg-red-400
                 transition duration-300 ease-in-out text-xl hover:shadow-xl hover:translate-y-2 shadow-white' >reserve</button>
              </div>
            
           
          </div>
      </div>
    </div>
  )
}

export default Banner
