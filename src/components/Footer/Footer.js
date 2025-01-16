'use client';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='grid grid-cols-6 lg:grid-cols-8'>
        <div className='col-span-2 bg-[rgb(25,25,25)] px-12 py-10  max-[700px]:hidden'>
          <h3 className='text-white font-Montserrat_Sans font-bold'>SUPPORT</h3>
          <div className='text-[#898989] font-Noto_Sans font-semibold py-3'>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Contact us
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              User Guide
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Warranty
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              International Warranty
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Scooter Safety Notice
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Android Enterprise Recommended
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Digital Services Act{' '}
            </p>
          </div>
        </div>
        <div className='col-span-2 bg-[rgb(25,25,25)] px-12 py-10  max-[700px]:hidden'>
          <h3 className='text-white font-Montserrat_Sans font-bold'>
            ABOUT US
          </h3>
          <div className='text-[#898989] font-Noto_Sans font-semibold py-3'>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Zoteach
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Leadership Team
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Investor Relations
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Trust Center
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Xiaomi Accessibility
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Integrity & Compliance
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              HyperOS
            </p>
          </div>
        </div>
        <div className='col-span-2 bg-[rgb(25,25,25)] px-12 py-10  max-[700px]:hidden'>
          <h3 className='text-white font-Montserrat_Sans font-bold'>
            ZOTECH PROJECTS
          </h3>
          <div className='text-[#898989] font-Noto_Sans font-semibold py-3'>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Zoteach Creators
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Zoteach Studios
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Zoteach Imagery
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Zoteach Master Class
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Zoteach Renovation
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              Integrity & Compliance
            </p>
            <p className='py-1 hover:underline hover:cursor-pointer hover:text-white'>
              HyperOS
            </p>
          </div>
        </div>
        <div className=' bg-[rgb(25,25,25)]  col-span-6  -row-start-1  lg:col-start-7 lg:col-end-9'>
          <div className='flex justify-between px-12 lg:py-5 lg:flex-col max-[700px]:flex-col '>
            <div className='p-2  '>
              <p className='text-white font-Montserrat_Sans font-bold my-2 py-1 max-[700px]:text-xs'>
                Follow Zoteach
              </p>
              <div className='flex  gap-x-2'>
                <div className=' bg-red-800 rounded-[50px] h-10 w-10 flex justify-center items-center'>
                  <FaFacebookSquare className=' lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-8 sm:w-6 h-6 w-6 cursor-pointer hover:text-[white]' />
                </div>
                <div className=' bg-red-800 rounded-[50px] h-10 w-10 flex justify-center items-center'>
                  <FaYoutube className='lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-8 sm:w-6 h-6 w-6 cursor-pointer hover:text-[white]' />
                </div>
                <div className=' bg-red-800 rounded-[50px] h-10 w-10 flex justify-center items-center'>
                  <FaXTwitter className='lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-8 sm:w-6 h-6 w-6 cursor-pointer hover:text-[white]' />
                </div>
                <div className=' bg-red-800 rounded-[50px] h-10 w-10 flex justify-center items-center'>
                  <AiFillInstagram className='lg:h-8 lg:w-8 md:h-8 md:w-8 sm:h-8 sm:w-6 h-6 w-6 cursor-pointer hover:text-[white]' />
                </div>
              </div>
            </div>
            <div className=' flex flex-col  items-start px-12 p-2 lg:p-2 max-[700px]:px-3'>
              <p className='text-white font-Montserrat_Sans font-semibold lg:text-[12px] my-2  max-[700px]:text-xs '>
                Enter your email address to subscribe to our newsletters
              </p>
              <from className='max-[700px]:w-[80%]'>
                <input
                  className='InputFooter'
                  name='email'
                  type='email'
                  placeholder='Enatr your email addess'
                />
              </from>
            </div>
          </div>
          ;
        </div>
      </footer>
    </>
  );
}
