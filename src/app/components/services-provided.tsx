import React from "react";
import Image from "next/image";
import img1 from "../../../public/img/whitegirlimg.webp";
import img2 from "../../../public/img/laptopimg.webp";
import img3 from "../../../public/img/2moons.webp";
import img4 from "../../../public/img/plusimg.webp";

const Services = () => {
  return (
    <>
      <div className=" flex justify-between  ml-20 mt-30">
        <div className="w-[50%] mt-20">
          <p className="mb-5 font-extralight">Who We Are</p>
          <p className="text-6xl mb-8 font-extralight">
            We provide best <br /> digital services
          </p>
          <p className="text-gray-400 mb-10">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
            <br /> sit aspernatur aut odit aut fugit, sed quia.
          </p>
          <button className="px-10 py-4 rounded-4xl bg-blue-400 text-white">
            Discover Now
          </button>
        </div>

        <div className="relative w-[50%] h-[500px]">
          {" "}
          {/* Container with fixed height */}
          {/* First Image - Slight tilt */}
          <div className="absolute z-10 top-22 ">
            <Image
              src={img4}
              alt="Male portrait"
              width={100}
              height={100}
              className="rounded-lg shadow-lg border-4 object-cover z-50 relative bottom-30 "
            />
            <Image
              src={img2}
              alt="Male portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover "
            />
          </div>
          {/* Second Image - More tilt and lower */}
          <div className="absolute left-[200px] top-[-20px] ">
            <Image
              src={img1}
              alt="Female portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
            <Image
              src={img3}
              alt="Female portrait"
              width={100}
              height={100}
              className="rounded-lg shadow-lg border-4 object-cover z-50 absolute right-[70px] bottom-[-150px]"
            />
          </div>
          {/* Add more images with increasing tilt and vertical offset as needed */}
        </div>
      </div>
    </>
  );
};

export default Services;
