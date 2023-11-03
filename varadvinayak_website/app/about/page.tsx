import React from "react";
import Image from "next/image";
import profile_icon from "../../public/profile_icon.jpg";

const About = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="mt-[5rem] mb-2 text-center capitalize text-4xl font-bold text-orange-600 ">
        About Us
      </h1>
      <hr className="lg:w-1/5 w-3/5 md:w-1/5 mx-auto shadow-2xl" />
      <div className="w-[90%] lg:w-[80%] bg-gray-200 p-3 shadow-md mt-7 mb-5">
        <p>
          (Company info here) Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illo reprehenderit dolorem quod aspernatur quos, eos, at veniam
          cumque magnam autem porro labore vel rerum minima esse pariatur
          placeat est illum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sapiente quam, voluptate corrupti nulla animi accusantium. Illum
          voluptatibus odio aliquid maxime in, asperiores blanditiis enim
          aliquam exercitationem totam. Quia, magni eos.
        </p>
      </div>
      <div className="flex w-[80vw] lg:w-[70vw] justify-between flex-wrap">
        <div className="flex flex-col gap-2 lg:w-[30vw] p-2 bg-gray-200 items-center mb-10 px-4">
          <Image src={profile_icon} alt="profileIcon" width={200} height={200} className="rounded-full"/>
          <h2 className="font-extrabold">Name of founder</h2>
          <p>
            (Info of founder) Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam reiciendis voluptas alias vel tenetur, voluptatibus
            asperiores molestiae officiis vitae iusto adipisci ab laborum illo
            fugiat illum explicabo saepe omnis nihil.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:w-[30vw] p-2 bg-gray-200 items-center mb-10 px-4">
          <Image src={profile_icon} alt="profileIcon" width={200} height={200} className="rounded-full"/>
          <h2 className="font-extrabold">Name of Manager</h2>
          <p>
            (Info of founder) Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veniam reiciendis voluptas alias vel tenetur, voluptatibus
            asperiores molestiae officiis vitae iusto adipisci ab laborum illo
            fugiat illum explicabo saepe omnis nihil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
