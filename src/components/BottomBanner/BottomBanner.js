'use client';
import React from 'react';
import Image from 'next/image';
import Car from './assets/CarImg.jpg';
import HyperOS from './assets/HyperOs.webp';
import ImgDream from './assets/ImgDream.jpg';
import Phone from './assets/phone.webp';
import Powerbank from './assets/powerbank.webp';
import PremiumIg from './assets/premiumIg.webp';
// Default theme
import '@splidejs/react-splide/css';

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
    details:
      'Xiaomi 165W | 33W Power Bank 10000 (Integrated Cable)',
  },
  {
    id: 6,
    src: PremiumIg,
    alt: 'PremiumIg',
    title: 'PremiumIg',
    details:
      'Come and check out the eligible devices and redeem your reward!.',
  },
  {
    id: 7,
    src: ImgDream,
    alt: 'img1',
    title: 'Xiaomi Smart Projector L1 Pro',
    details:
      '400 ISO,auto-focus, Dolby Audio™ and seamless connectivity, rock your audio-visual world.',
  },
  {
    id: 8,
    src: ImgDream,
    alt: 'img1',
    title: 'Xiaomi Smart Projector L1 Pro',
    details:
      '400 ISO,auto-focus, Dolby Audio™ and seamless connectivity, rock your audio-visual world.',
  },
  {
    id: 9,
    src: ImgDream,
    alt: 'img1',
    title: 'Xiaomi Smart Projector L1 Pro',
    details:
      '400 ISO,auto-focus, Dolby Audio™ and seamless connectivity, rock your audio-visual world.',
  },
];
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

function BottomBanner() {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          type: 'loop',
          // autoplay: 'play',

          // padding: '5rem',
        }}
        aria-label='My Favorite Images'
        className='Banner'
      >
        {Slide.map((data, index) => (
          <SplideSlide className='' key={index}>
            <Image
              className=' BannerImg w-full  relative'
              src={data.src}
              alt={data.alt}
            />
            <div className='absolute bottom-16 pl-16 w-[40%]'>
              <p className='font-Noto_Sans  hover:[opacity:80%] font-semibold  text-fuchsia-700 text-3xl'>
                {data.title}
              </p>
              <p className='font-Noto_Sans  hover:[opacity:80%] font-semibold  text-fuchsia-700 text-1xl'>
                {data.details}
              </p>
              <button className='font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white'>
                Learn more
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default BottomBanner;
