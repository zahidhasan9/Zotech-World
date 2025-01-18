import React from 'react';
import Pphone from './asset/Pphone.webp';
import Image from 'next/image';
function product() {
  return (
    <>
      <div className='bg-[#FFFFFF ]'>
        <div className='flex justify-around items-center bg-red- shadow-inner  p-5'>
          <div className='font-Noto_Sans font-semibold text-2xl'>
            Redmi Note 14 Pro+ 5G
          </div>
          <div className='flex  gap-3'>
            <div className='font-Noto_Sans font-semibold text-xl'>Specs</div>
            <div className='font-Noto_Sans flex justify-center items-center py-1 px-2  hover:opacity-80 cursor-pointer rounded-[10px] bg-black text-[#fff]  font-semibold text-sm'>
              Buy Now
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className=' flex justify-center items-center'>
              <Image
                className='pt-8 flex justify-center items-center'
                src={Pphone}
              />
            </div>
            <div className='flex justify-center py-16 gap-5'>
              <div className='flex items-center gap-2 '>
                <div className='shadow1 h-8 w-8 bg-[#C3E6EA] rounded-[50%] ' />
                <p>Frost Blue</p>
              </div>
              <div className='flex items-center gap-2 '>
                <div className='shadow1 h-8 w-8 bg-[#505050] rounded-[50%]' />
                <p>Midnight Black</p>
              </div>
              <div className='flex items-center gap-2'>
                <div className='shadow1 h-8 w-8 bg-[#D6D2EA] rounded-[50%]' />
                <p>Lavender Purple</p>
              </div>
            </div>
            <div className='flex justify-center py-16'>
              <span className='Border' />
            </div>
          </div>
        </div>

        <div>
          <div className='flex items-start justify-start px-[30%] gap-x-20'>
            <p className='font-Montserrat_Sans font-semibold text-xl'>
              Processor
            </p>
            <div className='font-Montserrat_Sans font-light'>
              <p>Snapdragon® 7s Gen 3</p>
              <p>4nm manufacturing process</p>
              <p>CPU: Octa-core processor, up to 2.5GHz</p>
              <p>GPU: Adreno GPU</p>
            </div>
          </div>
          <div className='flex justify-center py-16'>
            <span className='Border' />
          </div>

          <div className='flex items-start justify-start px-[30%] gap-x-20'>
            <p className='font-Montserrat_Sans font-semibold text-xl'>
              Dimensions
            </p>
            <div className='font-Montserrat_Sans font-light'>
              <p>Height: 162.53mm</p>
              <p>Width: 74.67mm</p>
              <p>
                Thickness:Midnight Black & Frost Blue 8.75mm丨Lavender Purple
                8.85mm
              </p>
              <p>
                Midnight Black & Frost Blue 210.14g丨Lavender Purple 205.13g
              </p>
            </div>
          </div>
          <div className='flex justify-center py-16'>
            <span className='Border' />
          </div>

          <div className='flex items-start justify-start px-[30%] gap-x-20'>
            <p className='font-Montserrat_Sans font-semibold text-xl'>
              Storage & RAM
            </p>
            <div className='font-Montserrat_Sans font-light'>
              <p>8+256GB, 12+256GB, 12+512GB</p>
              <p>LPDDR4X + UFS2.2</p>
            </div>
          </div>
          <div className='flex justify-center py-16'>
            <span className='Border' />
          </div>

          <div className='flex items-start justify-start px-[30%] gap-x-20'>
            <p className='font-Montserrat_Sans font-semibold text-xl'>
              Display
            </p>
            <div className='font-Montserrat_Sans font-light'>
              <p>6.67" CrystalRes AMOLED display</p>
              <p>Resolution: 2712 x 1220 (1.5K resolution)</p>
              <p>Refresh rate: Up to 120Hz</p>
              <p>
                Midnight Black & Frost Blue 210.14g丨Lavender Purple 205.13g
              </p>
              <p>Touch sampling rate: Up to 480Hz</p>
              <p>Brightness: 3000nits peak brightness</p>
              <p>Color depth: 12bit</p>
              <p>Contrast ratio: 5,000,000</p>
              <p>DCI-P3 wide color gamut</p>
              <p>Corning® Gorilla® Glass Victus® 2</p>
              <p>Supports Dolby Vision®</p>
              <p>Reading mode</p>
              <p>
                1920Hz PWM dimming｜20,000-level brightness adjustment｜HDR10+ |
                TÜV Rheinland Low Blue Light (Hardware Solution) Certified | TÜV
                Rheinland Flicker Free Certified | TÜV Rheinland Circadian
                Friendly Certified
              </p>
            </div>
          </div>
          <div className='flex justify-center py-16'>
            <span className='Border' />
          </div>
        </div>
      </div>
    </>
  );
}

export default product;
