'use client';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FiUser, FiSearch } from 'react-icons/fi';
import NavmenuButton from './assets/navmenuButton';
import SearchIcon from './assets/searchIcon';
import UserIcon from './assets/UserIcon';
import BagIcon from './assets/BagIcon';

function navbarmain() {
  return (
    <>
      <div className='flex  bg-slate-500 justify-between px-5 py-5'>
        <div className='logoweb  '>logo</div>
        <div>
          <ul className='flex gap-x-2 font-semibold fontcolor'>
            <li>Product</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div className=' flex gap-x-2'>
          <FiSearch className='h-6 w-6 logo ' />
          <HiOutlineShoppingBag className='h-6 w-6 logo' />
          <FiUser className='h-6 w-6 logo ' />
        </div>
        <div className='menue flex justify-center items-center h-8 w-8 relative  overflow- bg-slate-800  md:hidden '>
          <NavmenuButton className='' />
        </div>
      </div>
    </>
  );
}

export default navbarmain;
