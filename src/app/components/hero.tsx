import React from "react";
import Image from "next/image";
import maleImg from "../../../public/img/dreadguy.webp";
import femaleImg from "../../../public/img/girl.webp";

const Hero = () => {
  return (
    <>
      <div className=" flex justify-between  px-20 mt-30">
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

        <div className="w-[40%] mt-20">
          <p className="mb-5 font-extralight">creative agency</p>
          <p className="text-6xl mb-8 font-extralight">
            We help your <br /> business grow
          </p>
          <p className="text-gray-400">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
            <br /> sit aspernatur aut odit aut fugit, sed quia.
          </p>

          <div className="flex space-x-3 mt-8">
            <Image
              src={femaleImg}
              alt="Male portrait"
              width={70}
              height={40}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
            <div className="space-y-4">
              <p className="text-xl font-semibold">Creative design</p>
              <p className="text-gray-400">
                Natus error sit voluptatem accus antium doloremque.
              </p>
            </div>
          </div>
          <div className="flex space-x-3 mt-8">
            <Image
              src={femaleImg}
              alt="Male portrait"
              width={70}
              height={40}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
            <div className="space-y-4">
              <p className="text-xl font-semibold">Endless possibilities</p>
              <p className="text-gray-400">
                Sit voluptatem accus antium doloremque laudan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
