import React from 'react';

export default function () {
  return (
    <div className=' hidden pt-0 px-5 pb-10  flex-col  absolute top- left- w-screen h-screen bg-yellow-700'>
      <div>
        <div class=' login pb-3 p-2'>Login / Sign up</div>
      </div>
      <div className='p-2'>
        <ul className='menueitem font-sans font-normal py-2  '>
          <li>Product</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}
