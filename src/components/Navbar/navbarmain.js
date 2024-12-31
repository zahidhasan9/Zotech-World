'use client';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import im from'./assets/search.svg'
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
        <div className='  bg-slate-300 rounded-full '>
                      <Image className='cool h-10 w-10' src={im} alt="logo" ></Image>
                    </div>
      </div>
    </>
  );
}

export default navbarmain;
