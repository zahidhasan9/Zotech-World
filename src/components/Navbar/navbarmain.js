'use client';
import { useState } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FiUser, FiSearch } from 'react-icons/fi';
import NavmenuButton from './assets/navmenuButton';
import Sidebar from './sidebar';

function navbarmain() {

  const [Click, setClick] = useState(false)
 
  const handleClick=()=>{
    setClick(!Click)
  } 
 
  console.log(Click ,'sidebar')


  return (
    <>
      <nav className=' navbar sticky flex justify-between box-border items-center mx-0 my-auto px-5 py-3 '>
        <div className='logoweb '>logo</div>
        <div className='flex justify-between hidden lg:block lg:flex'>
          <ul className='flex gap-x-2 font-semibold fontcolor'>
            <li>Product</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div className='items-center gap-x-3  hidden  lg:block lg:flex'>
          <FiSearch className='logo  h-6 w-6 ' />
          <HiOutlineShoppingBag className='logo h-6 w-6  ' />
          <FiUser className='logo h-6 w-6  ' />
        </div>

        <button onClick={handleClick} className='menue flex items-center lg:hidden '>
          {/* <NavmenuButton  /> */}
      rimel
        </button>
      </nav>
      <Sidebar Click={Click}/>
    </>
  );
}

export default navbarmain;
