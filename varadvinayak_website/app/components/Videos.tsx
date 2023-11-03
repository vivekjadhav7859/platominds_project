import React from "react";

const Videos = () => {
  return (
    <div className="flex flex-col pt-5 justify-center items-center px-1">
      <h1 className="orange_gradient text-2xl font-extrabold p-2">Varadvinayak Park in Action: Showcasing Our Vision and Projects</h1>
      <div className="p-3">
        <video controls width="800" height="450">
          <source src="/videos/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-3">
        <video controls width="800" height="450">
          <source src="/videos/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-3">
        <video controls width="800" height="450">
          <source src="/videos/vid3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videos;
