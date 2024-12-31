import Image from "next/image";
import Search from "@/components/Navbar/assets/search.svg"
import Bag from "@/components/Navbar/assets/bag_svg.svg"
import User from "@/components/Navbar/assets/user.svg"
import Fatech from "@/components/Navbar/assets/fatech.png"
function Navbar() {
  return (
    <>
      <div className="h-11 w-full p-5 baner"></div>
      <div className="h-16 w-full  navbackground ">
        <div className="h-full flex justify-around items-center ">
          <div className="h-7 w-40 bg-stone-700 Logo">
          <div><Image  src={Fatech}></Image></div>
          </div>
          
            <ul className="flex   nav-item">
              <li>Product</li>
              <li>Service</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          <div className="logbar">
              <div><Image  src={Search}></Image></div>
              <div><Image src={User}></Image></div>
              <div><Image src={Bag}></Image></div>
              
              
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;