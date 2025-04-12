"use client";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <footer className="text-gray-400 px-6 sm:px-10 pt-14 bg-gray-900">
      {/* Top grid content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Office Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fefefe]">Office</h3>
          <p>Germany —</p>
          <p>785 15h Street, Office 478</p>
          <p>Berlin, De 81566</p>
          <div className="group relative inline-block cursor-pointer mt-4">
            <p className="text-lg pb-1">info@email.com</p>
            <div className="absolute bottom-0 left-0 h-[0.5px] bg-white transition-all duration-500 ease-out w-full group-hover:w-0"></div>
          </div>
          <p className="mt-6">+1 840 841 25 69</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fefefe]">Links</h3>
          <ul className="space-y-4">
            {["Home", "Services", "About Us", "Our Team", "Contacts"].map(
              (link, i) => (
                <li key={i}>
                  <span className="relative inline-block cursor-pointer group">
                    <span className="transition-colors duration-300 group-hover:text-white">
                      {link}
                    </span>
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fefefe]">Socials</h3>
          <ul className="space-y-4">
            {["Facebook", "Twitter", "Dribbble", "Instagram"].map(
              (social, i) => (
                <li key={i}>
                  <span className="relative inline-block cursor-pointer group">
                    <span className="transition-colors duration-300 group-hover:text-white">
                      {social}
                    </span>
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fefefe]">
            Newsletter
          </h3>
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            <div className="relative flex-1">
              <TbMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-6 h-6" />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-3xl bg-[#252a34] text-white"
              />
            </div>
            <button className="bg-blue-600 text-white p-4 rounded-full self-start sm:self-auto">
              <BsArrowRight />
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-start gap-2">
              <button
                type="button"
                className={`w-4 h-4 mt-[6px] rounded-sm border-[1px] flex items-center justify-center ${
                  isChecked
                    ? "bg-black border-gray-200"
                    : "bg-black border-white"
                }`}
                onClick={handleClick}
              >
                {isChecked && <div className="w-2 h-2 bg-white"></div>}
              </button>
              <p className="text-sm cursor-pointer">
                I agree to the{" "}
                <span className="underline hover:text-[#fefefe]">
                  privacy policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Bottom Note */}
      <p className="text-center text-sm md:text-base text-gray-500 pb-6">
        AxiomThemes © 2025. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
