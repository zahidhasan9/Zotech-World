'use client';
import React from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { LuCircleArrowLeft, LuCircleArrowRight } from 'react-icons/lu';

import Car from './assets/CarImg.jpg';
import HyperOS from './assets/HyperOs.webp';
import ImgDream from './assets/ImgDream.jpg';
import Phone from './assets/phone.webp';
import Powerbank from './assets/powerbank.webp';
import PremiumIg from './assets/premiumIg.webp';
// Default theme
import '@splidejs/react-splide/css';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

const Slide = [
  {
    id: 1,
    src: HyperOS,
    alt: 'HyperOS',
    title: 'Xiaomi HyperOS 2',
    details:
      'Enhanced user experience and seamless smart connectivity demonstrate the upgrades.',
  },
  {
    id: 2,
    src: Car,
    alt: 'img1',
    title: 'Xiaomi SU7 Ultra Prototype',
    details:
      'Breaking the lap record, becoming the fastest four-door car in Nürburgring Nordschleife history',
  },
  {
    id: 3,
    src: ImgDream,
    alt: 'ImgDream',
    title: 'Xiaomi Smart Projector L1 Pro',
    details:
      '400 ISO,auto-focus, Dolby Audio™ and seamless connectivity, rock your audio-visual world.',
  },
  {
    id: 4,
    src: Phone,
    alt: 'Phone',
    title: 'Redmi Note 14 Pro+ 5G',
    details:
      'Discover the refined design of the Redmi Note 14 Pro+ 5G, where sleekness meets innovation.',
  },
  {
    id: 5,
    src: Powerbank,
    alt: 'Powerbank',
    title: 'Elegant design with fast, powerful and safe charging',
    details: 'Xiaomi 165W | 33W Power Bank 10000 (Integrated Cable)',
  },
  {
    id: 6,
    src: PremiumIg,
    alt: 'PremiumIg',
    title: 'PremiumIg',
    details: 'Come and check out the eligible devices and redeem your reward!.',
  },
  {
    id: 7,
    src: ImgDream,
    alt: 'img1',
    title: 'Xiaomi Smart Projector L1 Pro',
    details:
      '400 ISO,auto-focus, Dolby Audio™ and seamless connectivity, rock your audio-visual world.',
  },
];

function BottomBanner() {
  return (
    <>
      <div className='bg-[#F7F7F7] py-10'>
        <div className='flex justify-center py-5 mt-0 mx-0 mb-12 font-Montserrat_Sans text-3xl  font-bold '>
          Explore Zotech
        </div>
        <Splide
          hasTrack={false}
          aria-label='My Slider'
          options={{
            rewind: true,
            type: 'loop',
            pagination: false,
            arrows: false,
            perPage: 3,
            autoplay: 'play',
            // padding: '3rem',
            // next: '.custom-next1',
            // prev: '.custom-prev1',
            breakpoints: {
              475: {
                perPage: 1,
                padding: '5rem',
                // Show 1 slide on mobile
              },
              768: {
                perPage: 2,
                // Show 1 slide on mobile
              },
              1024: {
                perPage: 2,
                // Show 2 slides on tablets
              },
            },
          }}
          className='Banner '
        >
          <SplideTrack>
            {Slide.map((data, index) => (
              <SplideSlide className='flex justify-center px-1' key={index}>
                <div className=' bg-[#FFFFFF] pb-2 rounded-[20px] lg:h-[420px] lg:w-[664px] md:h-[346px] md:w-[442px] max-[450px]:h-[190px] max-[450px]:w-[280px] max-[450px]:bg-transparent'>
                  <Image
                    className='  w-full rounded-t-[20px]'
                    src={data.src}
                    alt={data.alt}
                  />
                  <div className='p-5 '>
                    <p className=' font-Noto_Sans hover:[opacity:80%] font-semibold  text-black-700 md:text-2xl max-[450px]:text-sm'>
                      {data.title}
                    </p>
                    <p className='m-1 font-Montserrat_Sans  hover:[opacity:80%] font-light text-black-700 lg:text-sm md:text-sm sm:text-xs text-center max-[450px]:hidden'>
                      {data.details}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>

        {/* <Splide
          className='custom-slider'
          hasTrack={false}
          options={{
            type: 'loop', // Loop through slides
            autoplay: true, // Enable autoplay,
            pagination: false,
            pauseOnHover: true, // Pause when hovering over a slide
            interval: 3000, // Delay between slides in ms
          }}
          aria-label='My Custom Slider'
        >
          <div className='custom-wrapper'>
            <button className='splide__toggle' type='button'>
              <span className='splide__toggle__play'>Play</span>
              <span className='splide__toggle__pause'>Pause</span>
            </button>

            <div className='splide__progress'>
              <div className='splide__progress__bar' />
            </div>

            <SplideTrack>
              {Slide.map((Dat, tmp) => (
                <SplideSlide key={tmp}>
                  <Image src={Dat.src} alt='Slide 1' />
                </SplideSlide>
              ))}
            </SplideTrack>
            <div className='splide__arrows'>
              <button className='splide__arrow splide__arrow--prev'>
                Prev
              </button>
              <button className='splide__arrow splide__arrow--next'>
                Next
              </button>
            </div>
          </div>
        </Splide> */}
      </div>
    </>
  );
}

export default BottomBanner;
