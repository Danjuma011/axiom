import React from "react";
import Image from "next/image";
import maleImg from "../../../public/img/dreadguy.webp";
import femaleImg from "../../../public/img/girl.webp";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between px-6 sm:px-10 lg:px-20 mt-10 lg:mt-30 flex-col lg:flex-row">
        {/* Left side: Image section */}
        <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[500px] mb-8 lg:mb-0">
          {/* First Image - Female */}
          <div className="absolute w-full h-full">
            <Image
              src={femaleImg}
              alt="Female portrait"
              width={400}
              height={500}
              className="rounded-lg shadow-lg border-4 object-cover"
            />
          </div>
          {/* Second Image - Male, adjust position to keep balance */}
          <div className="absolute left-1/3 top-1/4 sm:left-[200px] sm:top-[120px]">
            <Image
              src={maleImg}
              alt="Male portrait"
              width={400}
              height={500} // Ensuring both images are the same size
              className="rounded-lg shadow-lg border-4 object-cover"
            />
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-20">
          <p className="mb-5 font-extralight text-center lg:text-left">
            Creative Agency
          </p>
          <p className="text-3xl sm:text-4xl lg:text-6xl mb-8 font-extralight text-center lg:text-left">
            We help your <br /> business grow
          </p>
          <p className="text-gray-400 mb-10 text-center lg:text-left">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas{" "}
            <br /> sit aspernatur aut odit aut fugit, sed quia.
          </p>

          {/* Service blocks */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 mt-8">
            <div className="flex items-center mb-8 lg:mb-0">
              <Image
                src={femaleImg}
                alt="Creative Design"
                width={70}
                height={40}
                className="rounded-lg shadow-lg border-4 object-cover"
              />
              <div className="ml-4 space-y-2">
                <p className="text-xl font-semibold">Creative Design</p>
                <p className="text-gray-400">
                  Natus error sit voluptatem accusantium doloremque.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <Image
                src={femaleImg}
                alt="Endless Possibilities"
                width={70}
                height={40}
                className="rounded-lg shadow-lg border-4 object-cover"
              />
              <div className="ml-4 space-y-2">
                <p className="text-xl font-semibold">Endless Possibilities</p>
                <p className="text-gray-400">
                  Sit voluptatem accusantium doloremque laudan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
