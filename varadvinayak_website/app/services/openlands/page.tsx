import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import ImageGallery from "@/app/components/ServicesImageGallery";
import slides from "../../api/imagegallery/OpenLandsImageGalleryApi";

const OpenLands = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 mb-8 shadow-lg lg:mx-14 pb-4">
        <ImageGallery data={slides} />
        <div className="">
          <h1 className="text-3xl text-center mt-6   capitalize font-base font-bold ">
            Our Huge open lands
          </h1>
        </div>
        <hr className="w-1/2 mx-auto my-4 font-bold" />

        <div className="grid lg:grid-flow-col md:grid-flow-col grid-flow-row mx-2 lg:mx-auto lg:max-w-[1000px] max-w-full items-center">
          <div className="grid grid-flow-row">
            <div className="max-w-sm bg-gray-200 p-6 rounded-lg mb-2">
              <h1 className="capitalize mb-2 font-semibold">
                Location and other details :
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              voluptate.
            </div>
            <div className="max-w-sm bg-gray-100 p-6 rounded-lg">
              <h1 className="capitalize mb-2 font-semibold">Key Highlights</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id
              voluptatibus consequatur nesciunt quidem enim perferendis ipsa
              tenetur laudantium. Illo?
            </div>
          </div>

          <div className="max-w-sm bg-gray-200 p-6 rounded-lg">
            <h1 className="capitalize mb-2 font-semibold">Details of Site</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            cupiditate asperiores dignissimos ab tempore doloribus expedita
            officiis? Ratione minus harum nam neque ea totam accusantium nisi
            ipsam corporis quo, quod qui sequi temporibus dolorem quasi quidem
            animi illo! Voluptate dignissimos aliquam sapiente. Deserunt, harum
            in eum architecto repudiandae ducimus amet?
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenLands;
