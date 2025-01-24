'use client';
import React from 'react';
import Image from 'next/image';
import Slide1u from "./assets/Slide1u.webp";
import Slide2u from "./assets/Slide2u.webp";
import Slide3u from "./assets/Slide3u.webp";
import Slide4u from "./assets/Slide4u.webp";
import Slide5u from "./assets/Slide5u.webp";
import Slide6u from "./assets/Slider6u.webp";
// Import ReactPlayer
import ReactPlayer from 'react-player';
// Default theme
import '@splidejs/react-splide/css';

const Slide = [
  {
    id: 1,
    type: 'video',
    src: "/video/vid.mp4", // Correct path for video in public folder
    alt: 'img1',
    title: 'XIAOMI 14T Pro',
    details: 'Master light, capture night',
  },
  {
    id: 2,
    type: 'img',
    src: Slide1u,
    alt: 'img2',
    title: 'Redmi Note 14 Pro 5G',
    details: 'The Best Redmi Note 14 Pro 5g 18+ AI Features',
  },
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
    alt: 'imh',
    title: 'Redmi Note 14 Pro 5G',
    details: 'The Best Redmi Note 14 Pro 5g 18+ AI Features',
  },
  {
    id: 5,
    type: 'img',  
    src: Slide4u, 
    alt: 'video1',
    title: 'Redmi Buds 6',
    details: 'HD Sound Quality, Long Battery Life',
  },
  {
    id: 6,
    type: 'img',  
    src: Slide5u, 
    alt: 'video1',
    title: 'Xiaomi Pad 7',
    details: 'QHD , Long Battery Life Beat Ipad Pro 9 205',
  },
  {
    id: 7,
    type: 'img',  
    src: Slide6u, 
    alt: 'video1',
    title: 'Xiaomi 14T Pro',
    details: 'Worlds First 14T Pro',
  },
];

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

function Banner() {
  return (
    <Splide
      options={{
        rewind: true,
        type: 'loop',
        // autoplay: 'play',
        // padding: '5rem',
      }}
      aria-label="My Favorite Images"
      className="Banner"
    >
      {Slide.map((data, index) => (
        <SplideSlide key={index}>
          {data.type === 'img' ? (
            <Image
              className="BannerImg w-full relative"
              src={data.src}
              alt={data.alt}
            />
          ) : data.type === 'video' ? (
            // Use ReactPlayer for the video slide
            <ReactPlayer
              className="BannerImg w-full relative"
              url={data.src}
              controls
              playing={true} // Play the video automatically
              loop={true}    // Loop the video
              muted={true}   // Mute the video
            />
          ) : null}
          
          <div className="absolute bottom-16 pl-16 w-[40%]">
            <p className="font-Noto_Sans hover:[opacity:80%] font-semibold text-fuchsia-700 text-3xl">
              {data.title}
            </p>
            <p className="font-Noto_Sans hover:[opacity:80%] font-semibold text-fuchsia-700 text-xl">
              {data.details}
            </p>
            <button className="font-Noto_Sans rounded-md mt-1 py-1 px-3 hover:[opacity:80%] font-semibold bg-black text-white">
              Learn more
            </button>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Banner;
