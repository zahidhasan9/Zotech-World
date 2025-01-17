import React from 'react';
import { BiSupport, BiShield, BiCoinStack, BiChat } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
function Support() {
  return (
    <>
      <div className='bg-[#F7F7F7] py-10'>
        <div className='pb-24'>
          <div className='flex justify-center py-5 mt-0 mx-0 mb-12 font-Montserrat_Sans text-3xl  font-bold '>
            Zotech Support
          </div>
          <div className='Bgbox grid grid-cols-4 gap-4 text-center font-Montserrat_Sans'>
            <div className=' col-span-1  flex flex-col items-center hover:text-[#ff6900] max-[700px]:col-span-2 cursor-pointer'>
              <BiSupport className='hover:text-[#ff6900] text-[#898B9B] mb-2 lg:h-20 lg:w-20 sm:w-10 sm:h-10 max-[700px]:w-14 max-[700px]:h-14' />
              <p className='font-semibold lg:text-xl max-[700px]:text-sm '>
                Customer Support
              </p>
              <p className='font-light lg:text-sm md:text-sm max-[700px]:text-xs'>
                Contact us via live-chat, email, and phone call
              </p>
            </div>
            <div className=' col-span-1  flex flex-col items-center hover:text-[#ff6900] max-[700px]:col-span-2 cursor-pointer'>
              <BiShield className='hover:text-[#ff6900] text-[#898B9B] mb-2 lg:h-20 lg:w-20 sm:w-10 sm:h-10 max-[700px]:w-14 max-[700px]:h-14' />
              <p className='font-semibold lg:text-xl max-[700px]:text-sm'>
                Warranty
              </p>
              <p className='font-light lg:text-sm md:text-sm max-[700px]:text-xs'>
                Local warranty policy protection is provided
              </p>
            </div>
            <div className=' col-span-1 flex flex-col items-center hover:text-[#ff6900] max-[700px]:col-span-2 cursor-pointer'>
              <BiCoinStack className='hover:text-[#ff6900] text-[#898B9B] mb-2 lg:h-20 lg:w-20  sm:w-10 sm:h-10 max-[700px]:w-14 max-[700px]:h-14' />
              <p className='font-semibold lg:text-xl max-[700px]:text-sm'>
                User Guides
              </p>
              <p className='font-light lg:text-sm md:text-sm max-[700px]:text-xs'>
                Find and download your Xiaomi product user guide
              </p>
            </div>
            <div className=' col-span-1 flex flex-col items-center hover:text-[#ff6900] max-[700px]:col-span-2 cursor-pointer'>
              <BiChat className='hover:text-[#ff6900] text-[#898B9B] mb-2 lg:h-20 lg:w-20  sm:w-10 sm:h-10 max-[700px]:w-14 max-[700px]:h-14' />
              <p className='font-semibold lg:text-xl max-[700px]:text-sm'>
                Faq
              </p>
              <p className='font-light lg:text-sm md:text-sm max-[700px]:text-xs'>
                Search for help about Xiaomi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
