"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {

  const router = useRouter();
  return (
    <>
    <Navbar/>
    <section>
      <h1 className="mt-[5rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600">
        Our Services
      </h1>
      <hr className="lg:w-1/5 w-1/3 md:w-1/5 mx-auto shadow-2xl" />

      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 justify-items-center mt-10">
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="construction"
            />
          
          <div className="px-6 py-4">
            <div className="font-bold tetx-xl mb-2">Ready to move Sites</div>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              impedit sunt temporibus modi aut.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 pb-2 px-6">
            <button className="bg-orange-300 rounded-full px-3 py-1 font-base mb-2" onClick={()=>{router.push('/services/readysites')}}>
              Know More
            </button>
          </div>
        </div>
        </div>

        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/18821289/pexels-photo-18821289/free-photo-of-building-with-apartments.jpeg"
              alt="construction"
            />
          
          <div className="px-6 py-4">
            <div className="font-bold tetx-xl mb-2">Cummercial Sites</div>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              impedit sunt temporibus modi aut.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 pb-2 px-6">
            <button className="bg-orange-300 rounded-full px-3 py-1 font-base mb-2" onClick={() => router.push('/services/cummercial')}>
              Know More
            </button>
          </div>
        </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/10804653/pexels-photo-10804653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="construction"
            />
            <div className="px-6 py-4">
            <div className="font-bold tetx-xl mb-2">Agricultural Sites</div>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              impedit sunt temporibus modi aut.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 pb-2 px-6">
            <button className="bg-orange-300 rounded-full px-3 py-1 font-base mb-2 " onClick={() => router.push('/services/agricultural')}>
              Know More
            </button>
          </div>
          </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="construction"
            />
            <div className="px-6 py-4">
            <div className="font-bold tetx-xl mb-2">Open Lands</div>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              impedit sunt temporibus modi aut.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 pb-2 px-6">
            <button className="bg-orange-300 rounded-full px-3 py-1 font-base mb-2" onClick={() => router.push('/services/openlands')}>
              Know More
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Services;
