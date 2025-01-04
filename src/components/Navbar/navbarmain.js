'use client';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FiUser, FiSearch } from 'react-icons/fi';
import NavmenuButton from './assets/navmenuButton';
import Sidebar from './sidebar';

function navbarmain() {
  return (
    <>
      <div className='flex items-center bg-gradient-to-r from-sky-500 to-indigo-300 justify-between px-5 py-5'>
        <div className='logoweb  '>logo</div>
        <div className='flex justify-between hidden lg:block lg:flex'>
          <ul className='flex gap-x-2 font-semibold fontcolor'>
            <li>Product</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div className='items-center gap-x-3 bg-red-600 hidden lg:block lg:flex'>
          <FiSearch className='logo  h-6 w-6  ' />
          <HiOutlineShoppingBag className='logo h-6 w-6  ' />
          <FiUser className='logo h-6 w-6  ' />
        </div>

        <div className='menue flex items-center  overflow- bg-slate-800  lg:hidden '>
          <NavmenuButton />
        </div>
      </div>
      <Sidebar></Sidebar>
    </>
  );
}

export default navbarmain;
