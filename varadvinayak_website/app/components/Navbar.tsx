"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import Image from "next/image";
import logo from '../../public/Navbar/logo.png'
export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Home",
      link: "/"
    },
    {
      labe: "About",
      link: "/about"
    },
    {
      labe: "Contacts",
      link: "/contact"
    },
    {
      labe: "Services",
      link: "/services"
    }
  ];

  return (
    <main className="pt-16">
      <nav className="flex justify-between px-8 items-center py-3 bg-white  fixed top-0 w-full shadow-md z-[1000]">
        <div className="flex items-center gap-8">
            <section className="flex items-center gap-4">
                {/* menu */}
                <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer lg:hidden"
                />
                {/* logo */}
                <Link href={"/"} className=" mr-12">
                <Image
                    src={logo}
                    width={70}
                    height={20}
                    alt="logo"
                />
                </Link>
            </section>
          {navlinks.map((d, i) => (
            <Link
              key={`nav_${i}`}
              className="hidden lg:block  text-gray-700 uppercase hover:text-orange-500 hover:font-bold"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
        </section>
        
      </nav>
    </main>
  );
}