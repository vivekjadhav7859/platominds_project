"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/Navbar/logo.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const router = useRouter();
  const closeMenu = () => {
    setMenu(false);
  };
  const handleLinkClick = (link: any) => {
    closeMenu();
    router.push(link);
  };

  const navlinks = [
    {
      labe: "Home",
      link: "/",
    },
    {
      labe: "About",
      link: "/about",
    },
    {
      labe: "Gallery",
      link: "/gallery",
    },
    {
      labe: "Services",
      link: "/services",
    },
    {
      labe: "Contact",
      link: "/contact",
    },
  ];

  return (
    <main className="pt-16">
      <nav className="flex justify-between px-8 items-center py-3 bg-white  fixed top-0 w-full shadow-md z-[1000]">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-[60vw] md:gap-[80vw] ">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />

            {/* logo */}
            <Link href={"/"} className="text-4xl font-mono ml-auto">
              <Image src={logo} width={70} height={20} alt="logo" />
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block font-medium  text-gray-800 hover:text-orange-500"
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
              // onClick={() => setMenu(false)}
              onClick={closeMenu}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <div
                key={i}
                className="font-bold"
                onClick={() => handleLinkClick(d.link)}
              >
                {d.labe}
              </div>
            ))}
          </section>
        </div>
      </nav>
    </main>
  );
}
