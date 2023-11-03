"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesApi from "../api/ServicesApi";

const Services = () => {
  const router = useRouter();
  const [ServicesData, setServicesData] = useState(ServicesApi);
  return (
    <>
      <section>
        <h1 className="mt-[5rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600">
          Our Services
        </h1>
        <hr className="lg:w-1/5 w-1/3 md:w-1/5 mx-auto shadow-2xl" />

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 justify-items-center mt-10">
          {ServicesData.map((currElem: any, index) => {
            const { image, title, description, url } = currElem;
            return (
              <div key={`services_${index}`}>
                <div className="py-10">
                  <div className="rounded overflow-hidden shadow-lg max-w-sm">
                    <img src={image} />

                    <div className="px-6 py-4">
                      <div className="font-bold tetx-xl mb-2">{title}</div>
                      <p className="text-gray-600 ">{description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5 pb-2 px-6">
                      <button
                        className="bg-orange-300 rounded-full px-3 py-1 font-base mb-2"
                        onClick={() => {
                          router.push(url);
                        }}
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>
    </>
  );
};

export default Services;
