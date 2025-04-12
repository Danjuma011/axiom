import React from "react";
import Image from "next/image";
import img1 from "../../../public/img/whitegirlimg.webp";
import img2 from "../../../public/img/laptopimg.webp";
import img3 from "../../../public/img/2moons.webp";
import img4 from "../../../public/img/plusimg.webp";

const Services = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between px-4 sm:px-10 lg:px-20 mt-20">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 mt-20">
          <p className="mb-5 font-extralight">Who We Are</p>
          <p className="text-4xl sm:text-5xl lg:text-6xl mb-8 font-extralight">
            We provide best <br /> digital services
          </p>
          <p className="text-gray-400 mb-10">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
            <br /> sit aspernatur aut odit aut fugit, sed quia.
          </p>
          <button className="px-8 py-4 rounded-4xl bg-blue-400 text-white">
            Discover Now
          </button>
        </div>

        {/* Right Section - Image Container */}
        <div className="relative w-full sm:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] mt-10 sm:mt-0">
          {/* First Image - Slight tilt */}
          <div className="absolute z-10 top-[5%] sm:top-[10%]">
            <Image
              src={img4}
              alt="Image 1"
              width={100}
              height={100}
              className="rounded-lg shadow-lg border-4 object-cover z-50 relative bottom-10 sm:bottom-20"
            />
            <Image
              src={img2}
              alt="Image 2"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
          </div>
          {/* Second Image - More tilt and lower */}
          <div className="absolute left-[20%] sm:left-[30%] top-[-10%] sm:top-[-20px]">
            <Image
              src={img1}
              alt="Image 3"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
            <Image
              src={img3}
              alt="Image 4"
              width={100}
              height={100}
              className="rounded-lg shadow-lg border-4 object-cover z-50 absolute right-[20px] sm:right-[40px] bottom-[-100px] sm:bottom-[-150px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
