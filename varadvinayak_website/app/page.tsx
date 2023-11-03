"use client";

import React, { lazy, Suspense } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image1 from "../public/sliderImages/1.png";
import Image2 from "../public/sliderImages/2.png";
import Image3 from "../public/sliderImages/3.png";
import Image4 from "../public/sliderImages/4.png";
import ResidentialIcon from "../public/icons/residential_icon.png";
import CommercialIcon from "../public/icons/commercial_icon.png";
import OpenPlotIcon from "../public/icons/open_plots.png";

const sliderImages = [Image1, Image2, Image3, Image4];
const Videos = lazy(() => import("./components/Videos"));

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="pt-10">
      <div ref={sliderRef} className="keen-slider flex">
        {sliderImages.map((sliderImage, index) => (
          <div
            key={`sliderImg_${index}`}
            className="keen-slider__slide w-[80vw] h-[30vh] lg:h-[70vh] p-4 "
          >
            <Image
              src={sliderImage}
              alt="img"
              className="object-fill w-full h-full rounded-md"
              priority={index === 0} // Set priority to true for the first image (above the fold)
            />
          </div>
        ))}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Videos />
      </Suspense>
      <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:justify-around p-6 bg-black">
        <div className="w-[180px] h-[180px] flex flex-col justify-center items-center rounded-full bg-[#baf2f7] hover:bg-[#026a74] cursor-pointer animate-pulse hover:animate-none my_shadow_for_icon hover:text-white">
          <Image src={ResidentialIcon} alt="icon"/>
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
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis corrupti placeat dolorum! Iure illum, illo cupiditate nesciunt labore laboriosam perspiciatis eum deleniti quidem placeat repellat magni! Illo, at? At, in?
      </div>
    </section>
  );
}
