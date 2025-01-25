
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
export default function ({Click}) {

  

  return (
   <>
    <div className={` ${Click?'block':'hidden'} pt-0 px-5 pb-10  lg:hidden md:hidden w-screen h-screen bg-white`}>
      <div className="">
        <div className=" login pb-3 p-2 mx-2 border-b-2 border-gray-400">
          Login / Sign up
        </div>
      </div>
      <div className="flex flex-col  justify-center ">
        <div className="p-2">
          <ul className="menueitem  font-medium py-4 cursor-pointer ">
            <div className="my-5 flex justify-between items-center ">
              <li>Mobile</li>
              <IoIosArrowForward />
            </div>
            <div className="my-5 flex justify-between items-center ">
              <li>Smart Home</li>
              <IoIosArrowForward />
            </div>
            <div className="my-5 flex justify-between items-center ">
              <li>Poco</li>
              <IoIosArrowForward />
            </div>
            <div className="my-5 flex justify-between items-center ">
              <li>Watch</li>
              <IoIosArrowForward />
            </div>
            <div className="my-5 flex justify-between items-center ">
              <li>Discover</li>
              <IoIosArrowForward />
            </div>
            <div className="my-5 flex justify-between items-center ">
              <li>Life Style</li>
              <IoIosArrowForward />
            </div>
          </ul>
        </div>

        <div className="p-2 absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <div>
            <ul className="flex justify-center items-center gap-2 font-sans font-semibold py-2 cursor-pointer">
              <li>Services</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
