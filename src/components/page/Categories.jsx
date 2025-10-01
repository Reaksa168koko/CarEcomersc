import React from 'react'
import { cars } from '../../Data'
import { Link } from 'react-router-dom'

const Categories = () => {

  return (
    <div className=' lg:w-full  lg:h-auto  bg-black lg:p-8 flex flex-wrap lg:gap-4 gap-3 '>
       {cars.map((p)=>(
         <div key={p.id} className=' lg:w-[32%] md:w-[46%] w-full lg:h-[500px] md:h-[550px] h-[450px] bg-black group  rounded-xl  border border-white p-2 flex flex-wrap hover:border-red-500 transition-all duration-300 ease-in-out group mx-4 lg:mx-1'>
            <div className='w-full h-[50%] bg-pink-300 overflow-hidden rounded-xl'>
                <img src={p.image} alt="" className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out ' />
            </div>
            <div className='  py-5 p-6 '>
            <div className='flex w-full justify-between '>
                <p className='lg:text-2xl md:text-xl text-white font-bold group-hover:text-red-500 transition-all duration-300 ease-in-out'>{p.model}</p>
                <p className='text-red-500 font-bold text-2xl'>${p.price}</p>
            </div>
            <div className='flex py-2 text-white'>
                <p className='me-1'>{p.year} .</p>
               <p className=''>{p.mileage} miles</p>
            </div>
              <div className='flex gap-2 py-2 text-white'>
                <p className='border font-bold rounded-md md:px-1  lg:px-3 px-1'>{p.feature1}</p>
                <p className='border font-bold rounded-md md:px-1 lg:px-3 px-1'>{p.feature2}</p>
                <p className='border font-bold rounded-md md:px-1 lg:px-3 px-1'>{p.feature3}</p>
              </div>
               <div className='py-2 flex gap-2'>
                  <Link to={`/car/${p.id}`} className=' lg:px-10 lg:py-2 md:px-6 md:py-1 px-5 py-3  text-white bg-red-500 rounded-md  font-bold cursor-pointer'>View Detail</Link>         
                  <button className=' lg:px-20  px-1 border rounded-md text-white font-bold group-hover:bg-red-500 transition-all duration-300 ease-in-out'>Schedule Test Drive</button>         
               </div>
            </div>
          
        </div>
       ))}
       <div className='w-full border-white items-center flex justify-center py-4  '>
          <button className='text-white px-7 py-3 border-2 rounded-md hover:bg-red-500 transition-all duration-300 ease-in-out hover:border-red-500 '>View All Vehicles</button>
       </div>
    </div>
  )
}

export default Categories
