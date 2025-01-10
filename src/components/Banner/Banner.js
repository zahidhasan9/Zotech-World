'use client';
import React from 'react';
import Image from 'next/image';
import Slider1 from './assets/miSlide1.webp';
import Slider2 from './assets/Slider2.webp';
import Slider3 from './assets/Slider3.webp';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
// import '@splidejs/react-splide/css/core';
const Slide = [
  {
    id: 1,
    src: Slider1,
    alt: 'img1',
    title: 'xiaomi 18 Pro',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 2,
    src: Slider2,
    alt: 'img1',
    title: 'xiaomi Note 18 ',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
  {
    id: 3,
    src: Slider3,
    alt: 'img1',
    title: 'xiaomi x8 Pro',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
  },
];
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

function Banner() {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          type: 'loop',
          autoplay: 'play',

          // padding: '5rem',
        }}
        aria-label='My Favorite Images'
        className='Banner'
      >
        {Slide.map((data, index) => (
          <SplideSlide key={index}>
            <Image className='BannerImg w-full' src={data.src} alt={data.alt} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default Banner;
