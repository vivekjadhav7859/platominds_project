import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img from "../../public/Navbar/logo.png";
const Footer = () => {
  return (
    <div>
      <>
        <div className="bg-gray-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5 mt-2">
          <div className="p-2 ">
            <ul>
              <Image src={img} alt="footer-img" className="h-48 w-48" />
              <div className="flex gap-5 pb-1">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>
          <div className="p-2">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Open Lands
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Cummercial Sites
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Ready To Move Sites
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Agricultural Lands
              </li>
            </ul>
          </div>
          <div className="p-2">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                About
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Products
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Pricing
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Press & Media
              </li>
            </ul>
          </div>
          <div className="p-2">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Contact
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Support Portals
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                List Of Charges
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Downloads & Resources
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-orange-500 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center   bg-gray-50">
          <h1 className=" text-gray-800 font-semibold">
            © 2023-2024 All rights reserved | Build with ❤ by{" "}
            <span className="hover:text-orange-500 font-semibold cursor-pointer pb-3">
              Wisnolect
            </span>
          </h1>
        </div>
      </>
    </div>
  );
};

export default Footer;
