'use client';
import React from 'react';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

function Banner() {
  return (
    <>
      <Splide
        options={{
          rewind: true,
          type: 'loop',

          padding: '5rem',
        }}
        aria-label='My Favorite Images'
        className='p-3'
      >
        <SplideSlide>
          <img
            className='h-96 w-screen bg-black'
            src='image1.jpg'
            alt='Image 1'
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className='h-96 w-screen bg-red-500'
            src='image2.jpg'
            alt='Image 2'
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className='h-96 w-screen bg-red-500'
            src='image2.jpg'
            alt='Image 2'
          />
        </SplideSlide>
      </Splide>
    </>
  );
}

export default Banner;
