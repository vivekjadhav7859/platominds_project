import Image from 'next/image'
import React from 'react'
import Image1 from "../../public/sliderImages/1.png";
import Image2 from "../../public/sliderImages/2.png";
import Image3 from "../../public/sliderImages/3.png";
import Image4 from "../../public/sliderImages/4.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const sliderImages = [Image1, Image2, Image3, Image4];

const ImageSlider = () => {
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
              }, 2500);
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
    <div ref={sliderRef} className="keen-slider flex">
        {sliderImages.map((sliderImage, index) => (
          <div
            key={`sliderImg_${index}`}
            className="keen-slider__slide w-[80vw] h-[30vh] lg:h-[80vh] p-1 "
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
  )
}

export default ImageSlider