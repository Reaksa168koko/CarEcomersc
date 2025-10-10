import React from 'react'
import { CiSearch } from "react-icons/ci";
import car from '../../assets/image/categories4.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full h-auto'>
        {/* footer ler */}
       <div className='w-[60%] h-[250px] flex mx-[450px] bg-blue-950 absolute z-50 -my-30 p-6'>
        {/* image */}
           <div className='w-1/2 h-full bg-amber-300 overflow-hidden rounded-md'>
                <img src={car} className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out rounded-md' alt="" />
           </div>
           {/* title */}
           <div className='w-1/2 h-full  p-4 '>
              <h1 className='text-white text-xl font-bold'>A passionate web developer who loves turning creative ideas into clean, modern designs.</h1>
              <p className='text-white mt-1.5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque tempore</p>
              <input type="text" className=' absolute text-md border-0 text-white outline-0 shadow shadow-black py-3 px-20 p-0 mx-0 mt-6 rounded-md' placeholder='Search....' />
              <CiSearch className='relative mt-9 mx-5 text-2xl text-white' />
           </div>
       </div>
       {/* footer krom */}
       <div className='w-[100%] h-[450px] p-20  bg-black relative mt-30'>
          <div className='w-full h-full flex  mt-13 p-5 mx-20'>
              <div className='w-[30%] h-full '>
                  <h1 className='text-5xl text-white font-bold text-center'>ETEC CENTER</h1>
                  <p className='text-white text-center mt-8 text-xl'>Lorem sapiente quibusdam delectus ut eius aut eveniet nemo nam repudiandae, repellat debitis mollitia.</p>
                  {/* icon */}
                  <div className='flex p-5 justify-center gap-5'>
                      <a href="https://www.facebook.com/share/16qazQ1oMU/?mibextid=wwXIfr"><FaFacebook  className='text-3xl text-white'/></a>
                      <a href=""><FaInstagram  className='text-3xl text-white'/></a>
                      <a href=""><FaTelegram  className='text-3xl text-white'/></a>
                      <a href=""><FaTwitter className='text-3xl text-white' /></a>
                  </div>
              </div>
              <div className='w-[70%] h-full p-8 flex text-white'>
                   <div className='w-[15%] h-full mx-6'>
                     <h1 className='text-xl font-bold'>Company</h1>
                    <div className='mt-5 flex space-y-3 flex-col'>
                      <a href="" className='text-white text-md'>About Us</a>
                      <a href="" className='text-white text-md'>Contact</a>
                      <a href="" className='text-white text-md'>Service</a>
                      <a href="" className='text-white text-md'>Comunity</a>
                    </div>
                   </div>
                   <div className='w-[15%] h-full mx-6'>
                        <h1 className='text-xl font-bold'>Support</h1>
                    <div className='mt-5 flex space-y-3 flex-col'>
                      <a href="" className='text-white text-md'>About Us</a>
                      <a href="" className='text-white text-md'>Contact</a>
                      <a href="" className='text-white text-md'>Service</a>
                      <a href="" className='text-white text-md'>Comunity</a>
                    </div>
                   </div>
                   <div className='w-[15%] h-full mx-6'>
                        <h1 className='text-xl font-bold'>Link</h1>
                    <div className='mt-5 flex space-y-3 flex-col'>
                      <a href="" className='text-white text-md'>About Us</a>
                      <a href="" className='text-white text-md'>Contact</a>
                      <a href="" className='text-white text-md'>Service</a>
                      <a href="" className='text-white text-md'>Comunity</a>
                    </div>
                   </div>
                   <div className='w-[25%] h-full flex mx-7'>
                     <div >
                    <h1 className='text-xl font-bold'>Contact Us</h1>
                    <div className='mt-5 flex space-y-3 flex-col'>
                       <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <div className='flex'>
                         <FaPhoneAlt />
                       <p className='text-md -mt-1 mx-3'>+855 0975422797 </p>
                      </div>
                    </div>
                     </div>
                     
                   </div>
              </div>
          </div>
          <div className='w-full h-[4px] bg-white'>
          </div>
          <div className='p-5 bg-black h-[80px] flex justify-between' >
              <h1 className='text-2xl text-white font-bold'>@Create By Sey Chanreaksa.</h1>
              <div className='flex gap-7'>
                <a href="" className='text-white text-md'>Privatcy Policy</a>
                      <a href="" className='text-white text-md'>Term Of Use</a>
                      <a href="" className='text-white text-md'>Legal</a>
                      <a href="" className='text-white text-md'>Site Map</a>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Footer
