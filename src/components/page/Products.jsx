import React from 'react'
import { products } from '../../Data'
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate();
  return (
    <div  className='w-full h-auto bg-black p-8 py-5 lg:py-25 ' >
        <h1 className='text-white font-bold lg:text-4xl text-3xl flex justify-center items-center'>Browse by Category</h1>
        <p className='text-gray-400 lg:text-xl text-md flex justify-center items-center mt-4'>Find your perfect vehicle from our carefully curated categories</p>
        {/* card */}
       <div className='flex flex-wrap lg:w-full lg:gap-5 md:gap-4'>
             {products.map((c)=>(
        
         <div onClick={()=>navigate(c.link)} key={c.id} className='lg:w-[24%] lg:h-[300px] w-full h-[300px]   lg:mt-15 mt-3 rounded-md p-2 border-1 group border-white hover:border-red-500 transition-all duration-300'>
           <div className='overflow-hidden h-[50%] w-full '>
              <img src={c.image} alt="" className='w-full h-full object-cover rounded-md group-hover:scale-105 transition-all duration-300 ease-in-out' />
           </div>
            <div>
                <h1 className='text-white mx-8 mt-8 text-xl font-bold group-hover:text-red-500 transition-all duration-300 ease-in-out'>{c.name}</h1>
                <p className='text-white mx-8 mt-2'>{c.description}</p>
            </div>
        </div>
        ))}
       </div>
    </div>
  )
}

export default Products
