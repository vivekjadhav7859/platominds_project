import React from "react";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-8">
        <ContactForm />
      </div>
    </>
  );
};

export default Contacts;
