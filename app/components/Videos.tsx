import React from "react";

const Videos = () => {
  return (
    <div className="flex flex-col pt-5 justify-center items-center px-1 mb-8 ">
      <h1 className="orange_gradient text-2xl lg:text-3xl font-bold p-2 fade-in-element">
        Varadvinayak Park in Action: Showcasing Our Vision and Projects
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center my-5 group">
          <div className="flex shadow-xl shadow-gray-400 group-hover:shadow-2xl rounded-lg p-2 bg-gray-300 ">
            <p className="text-sm  h-[150px] w-[250px] flex justify-center items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur at praesentium iste, quos aut earum inventore
              voluptates, facere delectus optio unde nihil. Minus iste odio ipsa
              atque doloremque magnam perspiciatis.
            </p>
          </div>
          <span className="h-[70px] w-[8px] lg:h-[8px] lg:w-[100px] bg-gray-300"></span>
          <div className="flex shadow-2xl shadow-gray-400 group-hover:shadow-lg">
            <video controls width="800" height="450">
              <source src="/videos/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center my-5 group">
          <div className="flex shadow-xl shadow-gray-400 group-hover:shadow-2xl rounded-lg p-2 bg-gray-300 ">
            <p className="text-sm  h-[150px] w-[250px] flex justify-center items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur at praesentium iste, quos aut earum inventore
              voluptates, facere delectus optio unde nihil. Minus iste odio ipsa
              atque doloremque magnam perspiciatis.
            </p>
          </div>
          <span className="h-[70px] w-[8px] lg:h-[8px] lg:w-[100px] bg-gray-300"></span>
          <div className="flex shadow-2xl shadow-gray-400 group-hover:shadow-lg">
            <video controls width="800" height="450">
              <source src="/videos/vid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center my-5 group">
          <div className="flex shadow-xl shadow-gray-400 group-hover:shadow-2xl rounded-lg p-2 bg-gray-300 ">
            <p className="text-sm  h-[150px] w-[250px] flex justify-center items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur at praesentium iste, quos aut earum inventore
              voluptates, facere delectus optio unde nihil. Minus iste odio ipsa
              atque doloremque magnam perspiciatis.
            </p>
          </div>
          <span className="h-[70px] w-[8px] lg:h-[8px] lg:w-[100px] bg-gray-300"></span>
          <div className="flex shadow-2xl shadow-gray-400 group-hover:shadow-lg">
            <video controls width="800" height="450">
              <source src="/videos/vid3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
