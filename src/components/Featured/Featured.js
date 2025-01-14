'use client';
import React from 'react';
import Tb1 from './assets/tb1.webp';
import Tb2 from './assets/tb3.webp';
import Tb3 from './assets/tb4.webp';
import Tb4 from './assets/tb6.webp';

import Image from 'next/image';

export default function Featured() {
  return (
    <>
      <div className='p-10 bg-[#F7F7F7]  flex flex-col items-center justify-center'>
        <div className='mt-0 mx-0 mb-12 font-Montserrat_Sans text-3xl  font-bold'>
          Featured Item
        </div>
        <div className=' info p-3 rounded-[10px] bg-white grid lg:grid-cols-4 md:grid-col-4  sm:grid-col-2'>
          <div className='Tb1 lg:h-[340px] lg:w-[676px]   col-span-2 bg-[#F9F9F9]'>
            <Image
              className=' imgtb object-cover md:h-[261px] md:w-[431px] lg:h-[340px] lg:w-[676px]'
              src={Tb1}
              alt='img1'
            />
          </div>
          <div className=' Tbinfo lg:h-[340px] lg:w-[676px] p-10 md:p-5 sm:p-16   flex flex-col justify-center items-center col-span-2 bg-[#F9F9F9]'>
            <p className='font-Playwrite text-3xl'>All-Star_Team</p>
            <p className='font-Noto_Sans text-base font-medium'>
              Redmi Note series | Watch 5 | Buds 6 Pro
            </p>
            <p className='font-Montserrat_Sans text-base font-light'>
              A powerful ecosystem crafted to enhance every part of your life.
            </p>
          </div>
          <div className='Tb2 h-[340px] col-span-1 mt-2 flex flex-col justify-center items-center bg-[#F7F7F7]'>
            <Image className=' imgtb2 object-cover ' src={Tb2} alt='img2' />
            <p className='font-Noto_Sans text-base font-medium'>
              Redmi Note 14 Pro 5G
            </p>
            <p className='font-Montserrat_Sans text-sm font-light text-center mx-2'>
              200MP pro-grade AI camera system
            </p>
            <button className='font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white'>
              Learn more
            </button>
          </div>
          <div className='Tb2 h-[340px] h- col-span-1 mt-2 ml-2.5 flex flex-col justify-center items-center bg-[#F7F7F7]'>
            <Image className=' imgtb2 object-cover ' src={Tb2} alt='img2' />
            <p className='font-Noto_Sans text-base font-medium'>
              Redmi Note 14 Pro
            </p>
            <p className='font-Montserrat_Sans text-sm font-light text-center mx-2'>
              5500mAh battery with 45W turbo charging
            </p>
            <button className='font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white'>
              Learn more
            </button>
          </div>
          <div className='h-[340px] col-span-1 mt-2 md:ml-2.5 sm:ml-2.5 flex flex-col justify-center items-center bg-[#F7F7F7]'>
            <Image className='h-[114px] w-[114px]' src={Tb3} />
            <p className='font-Noto_Sans text-base font-medium'>
              Redmi Watch 5
            </p>
            <p className='font-Montserrat_Sans text-sm font-light text-center mx-2'>
              2.07" ultra-thin bezel AMOLED display
            </p>
            <button className='font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white'>
              Learn more
            </button>
          </div>
          <div className='h-[340px] col-span-1 mt-2 ml-2.5 flex flex-col justify-center items-center bg-[#F7F7F7]'>
            <Image className='h-[114px] w-[114px]' src={Tb4} />
            <p className='font-Noto_Sans text-base font-medium'>
              Redmi Buds 6 Pro
            </p>
            <p className='font-Montserrat_Sans text-sm font-light text-center mx-2'>
              Coaxial triple drivers for enriched highs
            </p>
            <button className='font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white'>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
