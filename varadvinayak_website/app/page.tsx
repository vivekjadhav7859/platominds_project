"use client";

import React, { lazy, Suspense } from "react";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import ResidentialIcon from "../public/icons/residential_icon.png";
import CommercialIcon from "../public/icons/commercial_icon.png";
import OpenPlotIcon from "../public/icons/open_plots.png";

const Videos = lazy(() => import("./components/Videos"));
const ImageSlider = lazy(() => import("./components/ImageSlider"));

export default function Home() {
  return (
    <section className="pt-10">
      <Suspense fallback={<div>Loading...</div>}>
        <ImageSlider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Videos />
      </Suspense>
      <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:justify-around p-6 bg-black">
        <div className="w-[180px] h-[180px] flex flex-col justify-center items-center rounded-full bg-[#baf2f7] hover:bg-[#026a74] cursor-pointer animate-pulse hover:animate-none my_shadow_for_icon hover:text-white">
          <Image src={ResidentialIcon} alt="icon" />
          <p className="text-lg font-bold mt-2">Residential Plots</p>
        </div>
        <div className="w-[180px] h-[180px] flex flex-col justify-center items-center rounded-full bg-[#baf2f7] hover:bg-[#026a74] cursor-pointer animate-pulse hover:animate-none my_shadow_for_icon hover:text-white">
          <Image src={CommercialIcon} alt="icon" />
          <p className="text-lg font-bold mt-2">Commercial Plots</p>
        </div>
        <div className="w-[180px] h-[180px] flex flex-col justify-center items-center rounded-full bg-[#baf2f7] hover:bg-[#026a74] cursor-pointer animate-pulse hover:animate-none my_shadow_for_icon hover:text-white">
          <Image src={OpenPlotIcon} alt="icon" />
          <p className="text-lg font-bold mt-2">Open Land Plots</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-[5rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600">
          Our Mission
        </h1>
        <div className="w-5/6 p-2 rounded-md my-5 bg-gray-200 shadow-lg">
          <p>
            At{" "}
            <span className="font-semibold">
              Varadvinayak Real Infra Pvt. Ltd.
            </span>
            , our mission is to transform dreams into reality. We are dedicated
            to providing top-tier services in land acquisition, development, and
            construction. With a commitment to excellence, innovation, and
            sustainability, we aim to create thriving communities and lasting
            value for our clients. We believe in the power of collaboration and
            integrity, and we're driven to build a better future, one project at
            a time.
          </p>
        </div>
      </div>
    </section>
  );
}
