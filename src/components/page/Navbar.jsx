
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {  menu } from '../../Data';
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";



const Navbar= () => {
    const [Opensearch,Isopensearch] = useState(false);
    const [OpenShop,Isopenshop] = useState(false);
    const {cart,removeFromCart} = useContext(CartContext);

  return (

    <div className='w-full h-auto bg-black'>
       <div className='lg:w-full lg:h-[70px]  bg-black/80 backdrop:blur-md flex sticky  top-0 z-50  '>
            {/* logo */}
            <div className='lg:w-1/3 lg:h-full w-full h-[70px] lg:p-4 flex items-center mx-3 lg:mx-3 '>
                <h1 className='text-white  text-3xl lg:px-40'>Auto <span className='text-rose-500'>Lux</span></h1>
            </div>
            {/* link */}
            <div className='lg:w-1/3 lg:h-full lg:flex hidden justify-center items-center '>
              {menu.map((p)=>(
                <ul key={p.name} className='flex text-white mx-6 text-md ' >
                <li className=''>
                  <a href="" className='hover:text-rose-300'>{p.name}</a>
                </li>
              </ul>
              ))}
            </div>
            {/* icon */}
            <div className='lg:w-1/3 lg:h-full flex justify-center items-center '> 
              <div className='flex gap-5 mx-2 '>
              <IoSearchOutline onClick={()=>Isopensearch(!Opensearch)} className='text-white text-2xl hover:text-red-400' />
              <FaRegUser className='text-white text-2xl hover:text-red-400' />
             <div className="relative inline-block">
               {/* Cart icon */}
                <FiShoppingCart onClick={()=>Isopenshop(!OpenShop)} className="text-white text-2xl hover:text-red-400" />

                {/* Badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </div>

   
              </div>
            </div>
       </div>   

      {/* opensearchSidbar */}
    <div className={`lg:w-[400px] w-[80%] h-screen fixed top-0 bg-black ${Opensearch ? "translate-x-0" :"-translate-x-full" } transition duration-300 ease-in-out z-50`}   >
            <div className='h-[70px] flex items-center justify-between bg-white'>
              <h1 className='text-black  text-2xl px-3'>Auto <span className='text-rose-500'>Lux</span></h1>
              <IoMdClose onClick={()=>Isopensearch(false)}  className='text-4xl mx-2 cursor-pointer'/>
            </div>
            <div className='h-full w-full'>
                  {menu.map((p)=>(
                    <ul key={p.name} className='flex text-white  text-md ' >
                    <li className='h-full w-full py-4 mt-2 hover:bg-amber-300 transition duration-200 ease-in-out'>
                      <a href="" className='hover:text-rose-300 font-bold mx-3 text-2xl w-full h-full'>{p.name}</a>
                    </li>
                  </ul>
                  ))}
            <div className='mt-4 px-2'>
              <button className='uppercase px-10 py-3 bg-rose-500 rounded-sm hover:bg-red-600 transition duration-200 hover:translate-y-1 hover:shadow-xl shadow-white text-white'>reserve</button>
            </div>
            </div>
    </div>
        {/* opensibarright */}
     
   <div className={`lg:w-[400px] w-[80%] h-screen fixed top-0 bg-black ${OpenShop ? "translate-x-0" :"translate-x-full" } right-0 transition duration-300 ease-in-out z-50`}   >
              <div className='h-[70px] flex items-center justify-between bg-white'>
                <h1 className='text-black  text-2xl px-3'>Your <span className='text-rose-500'>Order</span></h1>
                <IoMdClose onClick={()=>Isopenshop(false)}  className='text-4xl mx-2 cursor-pointer'/>
              </div>
              <div className="p-3 space-y-3">
              {cart.length === 0 ? (
                <p className="text-gray-400 text-center mt-4">Your cart is empty.</p>
              ) : (
                cart.map((cars, index) => (
                  <div
                    key={index}
                    className="w-full h-[90px] flex border border-white rounded-md overflow-hidden"
                  >
                    {/* image */}
                    <div className="w-[30%] h-full">
                      <img
                        src={cars.image}
                        alt={cars.model}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* details */}
                    <div className="flex-1 px-3 mt-2">
                      <h1 className="text-white text-lg font-bold">{cars.model}</h1>
                      <p className="text-red-500 font-semibold">${cars.price}</p>
                    </div>
                    {/* delete button */}
                    <div className="flex items-center">
                      <button onClick={()=>removeFromCart(cars.id)} className="text-sm font-bold text-white px-3 py-2 rounded-md bg-red-500 hover:bg-red-600 mx-2">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
      </div>
    </div>
  )
}

export default Navbar
