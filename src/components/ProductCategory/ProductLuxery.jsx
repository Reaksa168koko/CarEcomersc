import React from 'react'
import { luxaryCars } from '../../Data'
import { Link } from 'react-router-dom'

function ProductLuxery() {
  return (
    <div className='w-full h-auto bg-black'> 
    <h1 className='flex justify-center items-center font-bold  py-6 text-5xl text-white'>LuxaryCar</h1>
       <div className='flex flex-wrap p-8'>
         {luxaryCars.map((l)=>(
            <div key={l.id} className=' lg:w-[32%] md:w-[45%] w-full lg:h-[500px] md:mt-4 md:h-[550px] h-[450px] bg-black group  rounded-xl  border  border-white p-2 flex flex-wrap hover:border-red-500 transition-all duration-300 ease-in-out group mx-4 lg:mx-1'>
            <div className='w-full h-[50%] bg-pink-300 overflow-hidden rounded-xl'>
                <img src={l.image} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out ' />
            </div>
            <div className='  py-5 p-6 '>
            <div className='flex w-full justify-between '>
                <p className='lg:text-2xl md:text-xl text-white font-bold group-hover:text-red-500 transition-all duration-300 ease-in-out'>{l.model}</p>
                <p className='text-red-500 font-bold text-2xl'>${l.price}</p>
            </div>
            <div className='flex py-2 text-white'>
                <p className='me-1'>{l.year} .</p>
               <p className=''>{l.mileage} miles</p>
            </div>
              <div className='flex gap-2 py-2 text-white'>
                <p className='border font-bold rounded-md md:px-1  lg:px-3 px-1'>{l.feature1}</p>
                <p className='border font-bold rounded-md md:px-1 lg:px-3 px-1'>{l.feature2}</p>
                <p className='border font-bold rounded-md md:px-1 lg:px-3 px-1'>{l.feature3}</p>
              </div>
               <div className='py-2 flex gap-2'>
                  <Link to={`/luxary/${l.id}`} className=' lg:px-10 lg:py-2 md:px-6 md:py-1 px-5 py-3  text-white bg-red-500 rounded-md  font-bold cursor-pointer'>View Detail</Link>         
                  <button className=' lg:px-20  px-1 border rounded-md text-white font-bold group-hover:bg-red-500 transition-all duration-300 ease-in-out'>Schedule Test Drive</button>         
               </div>
            </div>
          
        </div>
        ))}
       </div>
    </div>
  )
}

export default ProductLuxery
