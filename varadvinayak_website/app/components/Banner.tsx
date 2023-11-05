import React from "react";
import phone from "../../public/contact/phone.svg";
import address from "../../public/contact/address.svg";
import email from "../../public/contact/email.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mb-4 mb-4">
        <div className=" w-72 h-28 bg-[url('https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762_1280.png')] mt-8 bg-cover bg-center  mb-12"></div>
        <h1 className="mt-[-2rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600">
          Contact Us
        </h1>
        <hr className="lg:w-1/5 w-3/5 md:w-1/5 mx-auto shadow-2xl" />
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.577471647849!2d74.23307027435729!3d16.698014222300003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82450a7992c81ca3%3A0x4ec9b89df48a48e1!2sVaradvinayak%20Park%20Kolhapur!5e0!3m2!1sen!2sin!4v1699077191152!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 justify-items-center lg:mt-2 mt-1/3 mx-auto ">
        <div className="py-5">
          <div className="flex rounded overflow-hidden shadow-lg max-w-sm items-center justify-center bg-orange-200 pd-10">
            <Image
              src={address}
              alt="address"
              width={100}
              height={100}
              className=""
            />

            <div className="px-6 py-4 bg-orange-400 ">
              <div className="font-bold tetx-xl mb-2">Address</div>
              <p className="text-gray-600 ">
                Prathamik Shikashak Bank, Sterling Towers, Gavat Mandai Rd, E
                Ward, Shahupuri, Kolhapur, Maharashtra 416001
              </p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex rounded overflow-hidden shadow-lg max-w-sm items-center justify-center bg-orange-200 pd-10">
            <Image
              src={phone}
              alt="phone"
              width={100}
              height={100}
              className=""
            />

            <div className="px-6 py-4 bg-orange-400 ">
              <div className="font-bold tetx-xl mb-2">Contact</div>
              <p className="text-gray-600 ">
                You can Contact us using following contact Numbers
                <br />
                <span className="font-bold">
                  9874563210
                  <br />
                  9856741230
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex rounded overflow-hidden shadow-lg max-w-sm items-center justify-center bg-orange-200 pd-10">
            <Image
              src={email}
              alt="email"
              width={100}
              height={100}
              className=""
            />

            <div className="px-6 py-4 bg-orange-400 ">
              <div className="font-bold tetx-xl mb-2">Email Us</div>
              <p className="text-gray-600 ">
                If you have any queries then you can email us on following email
                address
                <br />
                <span className="font-bold">varadvinayakpark@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;