'use client';
import React from 'react';

export default function Featured() {
  return (
    <>
      <div className='p-10 bg-slate-400  flex flex-col items-center justify-center'>
        <div className='mt-0 mx-0 mb-12'>Featured Item</div>
        <div className='w-[556px] h-[520px] bg-red-600 grid grid-cols-4 gap-4'>
          <div className=' w-auto col-span-2 bg-pink-400'>1</div>
          <div className='col-span-2 bg-pink-300'>2</div>
          <div className='col-span-1 bg-pink-100'>3</div>
          <div className='col-span-1 bg-pink-200'>4</div>
          <div className='col-span-1 bg-pink-500'>5</div>
          <div className='col-span-1 bg-pink-500'>6</div>
        </div>
      </div>
    </>
  );
}
