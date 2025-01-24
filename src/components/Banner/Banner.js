'use client';

import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import Slide1u from "../../public/BannerIMG/Slide1u.webp";
import Slide2u from "../../public/BannerIMG/Slide2u.webp";
import Slide3u from "../../public/BannerIMG/Slide3u.webp";
import Slide4u from "../../public/BannerIMG/Slide4u.webp";
import Slide5u from "../../public/BannerIMG/Slide5u.webp";
import Slide6u from "../../public/BannerIMG/Slider6u.webp";
import Slide7u from "../../public/BannerIMG/slide0.webp";
// Import ReactPlayer

const Slide = [
  // {
  //   id: 1,
  //   clss:"bottom-16 text-red-500",
  //   src: Slide7u, // Correct path for video in public folder
  //   alt: 'img1',
  //   title: 'XIAOMI 14T Pro',
  //   details: 'Master light, capture night',
  // },
  
  {
    id: 3,
    type: 'img',
    src: Slide2u,
    alt: 'img3',
    title: 'Redmi Watch 5 Active',
    details: 'Smart Our Life, Smart Our World',
  },
  {
    id: 4,
    type: 'img',  
    src: Slide3u, 
    alt: 'img',
    title: 'Redmi Note 14 Pro 5G',
    details: 'The Best Redmi Note 14 Pro 5g 18+ AI Features',
  },
  {
    id: 5,
    type: 'img',  
    src: Slide4u, 
    alt: 'img',
    title: 'Redmi Buds 6',
    details: 'HD Sound Quality, Long Battery Life',
  },
  {
    id: 6,
    type: 'img',  
    src: Slide5u, 
    alt: 'img',
    title: 'Xiaomi Pad 7',
    details: 'QHD , Long Battery Life Beat Ipad Pro 9 205',
  },
  {
    id: 7,
    type: 'img',  
    src: Slide6u, 
    alt: 'img',
    title: 'Xiaomi 14T Pro',
    details: 'Worlds First 14T Pro',
  },
];

import { Splide,SplideSlide } from '@splidejs/react-splide';

function Banner() {
 
  return (
   <>
   
    <Splide
    options={{
    rewind: true,
    type: 'loop',
    autoplay: 'play',
  }}
  aria-label="My Favorite Images"
  className="Banner"
>
  
  {Slide.map((data, index) => (
     
    <SplideSlide key={index}>
    
        <Image
          className="lg:h-[476px] md:h-[476px] lg:md:object-cover md:object-cover h-[376px] object-cover  "
          src={data.src}
          alt={data.alt}
        />
     
      <div className={`absolute bottom-16 pl-16  `}>
      <div className='flex flex-col justify-center' >
      <p className={`font-Playwrite hover:[opacity:80%] py-2 font-extrabold text-5xl text-black `}>
          {data.title}
        </p>
        <p className="font-Noto_Sans hover:[opacity:80%] font-semibold text-fuchsia-700 text-xl">
          {data.details}
        </p>
        <button className="font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white">
          Learn more
        </button>
      </div>
      </div>
    </SplideSlide>
  ))}
</Splide>
   </>
    
  );
}

export default Banner;
