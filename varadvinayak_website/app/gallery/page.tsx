"use client";

import Image from "next/image";
import React, { useState } from "react";

const Gallery = () => {
  const imageNames = [
    "g1.jpg",
    "g2.jpg",
    "g3.jpg",
    "g4.jpg",
    "g5.jpg",
    "g6.jpg",
    "g7.jpg",
    "g8.jpg",
    "g9.jpg",
    "g10.jpg",
    "g11.jpg",
    "g12.jpg",
    "g13.jpg",
    "g14.jpg",
    "g15.jpg",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section>
      <h1 className="mt-[5rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600 ">
        Gallery
      </h1>
      <hr className="lg:w-1/5 w-3/5 md:w-1/5 mx-auto shadow-2xl" />
      <div className="flex flex-wrap justify-center group mt-6 " >
        {imageNames.map((imageName, index) => (
          <div
            key={index}
            className="m-2 lg:w-auto flex justify-center lg:hover:scale-150 border-2 lg:hover:z-10"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={`/galleryImages/${imageName}`}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
              className={` ${
                hoveredIndex !== -1 && hoveredIndex !== index && "md:filter md:blur-sm "
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
