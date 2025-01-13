'use client';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='grid grid-cols-6 lg:grid-cols-8'>
        <div className=' bg-red-600 h-24  col-span-2'>1</div>
        <div className=' bg-red-700 h-24  col-span-2'>2</div>
        <div className='bg-red-800 h-24  col-span-2'>3</div>
        <div className=' bg-red-500 h-24 col-span-6  -row-start-1  lg:col-start-7 lg:col-end-9'>
          <div className='flex justify-between px-12  '>
            <div className=' h-10 '>
              <p>Follow Zoteach</p>
              <div className='flex gap-x-2'>
                <Image
                  className=' bg-black rounded-[50px] h-10 w-10'
                  src={''}
                  alt='1'
                />
                <Image
                  className=' bg-black rounded-[50px] h-10 w-10'
                  src={''}
                  alt='2'
                />
                <Image
                  className=' bg-black rounded-[50px] h-10 w-10'
                  src={''}
                  alt='3'
                />
                <Image
                  className=' bg-black rounded-[50px] h-10 w-10'
                  src={''}
                  alt='4'
                />
              </div>
            </div>
            <div className=' h-10'>
              <p className=''>
                Enter your email address to subscribe to our newsletters
              </p>
              <from>
                <input placeholder='Enatr your email addess' />
              </from>
            </div>
          </div>
          ;
        </div>
      </footer>
    </>
  );
}
