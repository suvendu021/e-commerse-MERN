/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="md:mt-[7%] mt-[20%] md:flex px-4">
      <img
        className="md:w-4/12 w-full px-2"
        src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1716858733~exp=1716862333~hmac=45e2b3de7d1e571ed263c2ce4b6906895ae83225ba51ee39b15beb8c5e300fcf&w=740"
        alt="contact_us"
      />
      <div className="px-4">
        <p className="text-5xl text-center font-serif font-bold">Contact Us</p>
        <p className="font-semibold font-mono mt-6 text-xl">
          We’re Here to Help – Get in Touch with H & B
        </p>
        <p>
          At H & B, we value your feedback and are committed to providing
          exceptional service. Whether you have a question, need assistance with
          an order, or want to share your experience with us, we’re just a
          message away.
        </p>
        <p className="font-semibold font-mono mt-6 text-xl">How to Reach Us</p>
        <p className="font-semibold font-mono mt-6 text-xl">
          Customer Support:
        </p>
        <p>
          For any inquiries or assistance with your orders, our customer support
          team is available to help you.
        </p>
        <ul>
          <li className="mt-4">
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/suvendu-kumar-sahoo-48584322a/"
              target="_blank"
            >
              <FaLinkedin size={22} />
              <p className="font-semibold font-mono px-2">LinkedIn</p>
            </a>
          </li>
          <li className="mt-4">
            <a
              className="flex  items-center"
              href="https://github.com/suvendu021"
              target="_blank"
            >
              <FaGithub size={22} />
              <p className="font-semibold font-mono px-2">GitHub</p>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
