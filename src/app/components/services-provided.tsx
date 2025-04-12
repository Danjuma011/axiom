import React from "react";
import Image from "next/image";
import maleImg from "../../../public/img/dreadguy.webp";
import femaleImg from "../../../public/img/girl.webp";

const Services = () => {
  return (
    <>
      <div className=" flex justify-between  px-20 mt-30">
        <div className="w-[40%] mt-20">
          <p className="mb-5 font-extralight">Who We Are</p>
          <p className="text-6xl mb-8 font-extralight">
            We provide best <br /> digital services
          </p>
          <p className="text-gray-400">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
            <br /> sit aspernatur aut odit aut fugit, sed quia.
          </p>
        </div>

        <div className="relative w-[50%] h-[500px]">
          {" "}
          {/* Container with fixed height */}
          {/* First Image - Slight tilt */}
          <div className="absolute  ">
            <Image
              src={femaleImg}
              alt="Male portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
          </div>
          {/* Second Image - More tilt and lower */}
          <div className="absolute left-[200px] top-[120px] ">
            <Image
              src={maleImg}
              alt="Female portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
          </div>
          {/* Add more images with increasing tilt and vertical offset as needed */}
        </div>
      </div>
    </>
  );
};

export default Services;
