import React from "react";
import contactSvg from "../../public/contact/contact.svg";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
      <div className="w-full lg:w-40%">
        <Image
          src={contactSvg}
          width={50}
          height={50}
          alt="Contact Image"
          className="w-full h-auto"
        />
      </div>
      <form
        className="w-full lg:w-60% p-6 bg-gray-100 rounded-lg"
        action="https://formspree.io/f/xoqoblyb"
        method="POST"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white border border-gray-300 rounded py-2 px-3 h-32 resize-none focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
