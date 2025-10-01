import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cars } from '../../Data';
import { IoIosStar } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { CartContext } from '../../CartContext';




const TestlaSplaid = () => {
        const {id} = useParams();
        const car = cars.find(c => c.id === parseInt(id))
        const {addToCart} = useContext(CartContext);
        const [qty, setQty] = useState(1);
  return (
    
    <div className='w-full h-auto flex justify-center items-center py-40'>
      
       <div className='w-[70%] h-[500px]  flex  rounded-xl bg-black  '>
        {/* image */}
        <div className='w-1/2 h-full  overflow-hidden  rounded-xl'>
              <img src={car.image} alt="" className='w-full h-full object-cover rounded-xl hover:scale-104 transition-all duration-300 ease-in-out'/>
        </div>
        {/* title */}
          <div className='w-1/2 h-full p-8 '>
              <h1 className='text-white text-3xl font-bold'>{car.model}</h1>
             <div className='flex justify-between mt-2'>
               <p className='font-bold text-rose-500 text-xl'>${car.price}</p>
               <p className='text-white text-xl'>{car.year}</p>
             </div>
             {/* icon */}
             <div className='mt-2 flex'>
                <IoIosStar color='red'/>
                <IoIosStar color='red'/>
                <IoIosStar color='red'/>
                <IoIosStar color='red'/>
                <IoIosStar color='white'/>
             </div>
            <div className='w-full h-[2px] bg-white mt-2'>

            </div>
             {/* discription */}
             <div>
              <p className='text-white mt-3'>{car.description}</p>
             </div>
             <div className='py-8 flex gap-3' >
              <div className='flex py-2 text-white'>
                <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="border font-bold rounded-md px-3"
              >
                -
              </button>
              <div className="border font-bold rounded-md px-5">{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="border font-bold rounded-md px-3"
              >
                +
              </button>
              </div>
                <button onClick={()=>addToCart(car)} className='px-10 font-bold text-white py-3 bg-rose-500 rounded-md hover:translate-y-1 shadow-xl hover:shadow-white transition-all duration-300 ease-in-out hover:bg-rose-600'>ADD TO CART</button>
             </div>
              <div className='w-full h-[2px] bg-white mt-2'>
            </div>
            {/* feature */}
            <div className=' gap-3'>
              <h1 className='text-2xl text-white '>Features</h1>
              <div className='flex gap-2 py-2 text-white'>
                <p className='border font-bold rounded-md px-3'>{car.feature1}</p>
                <p className='border font-bold rounded-md px-3'>{car.feature2}</p>
                <p className='border font-bold rounded-md px-3'>{car.feature3}</p>
              </div>
            </div>
            {/* icon */} 
            <div className='flex justify-between '>
              <div className='flex gap-3 text-3xl py-2'>
               <FaFacebook color='white'/>
              <FaFacebookMessenger color='white' />
              <FaInstagramSquare color='white'/>
              <SiTelegram color='white'/>
             </div>
              <Link to={`/`} className='text-white text-md underline hover:text-red-500 transition duration-300 cursor-pointer py-3'>
                Home 
              </Link>
            </div>
             
          </div>

       </div>
    </div>
  )
}

export default TestlaSplaid
