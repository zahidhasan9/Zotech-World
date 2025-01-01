'use client';
import SearchIcon from './assets/searchIcon';
import UserIcon from './assets/UserIcon';
import BagIcon from './assets/BagIcon';

function navbarmain() {
  return (
    <>
      <div className='flex  bg-slate-500 justify-between px-5 py-5'>
        <div className='h-5 w-5 bg-slate-300 rounded-full '>logo</div>
        <div>
          <ul className='flex gap-x-2'>
            <li>Product</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div className=' flex gap-x-2'>
          <SearchIcon className='h-5 w-5 ' />
          <UserIcon className='h-5 w-5 ' />
          <BagIcon className='h-5 w-5 hover:fill-black' />
        </div>
      </div>
    </>
  );
}

export default navbarmain;
