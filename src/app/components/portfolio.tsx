"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const increment = target / steps;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(increment * currentStep), target));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="relative text-center">
      <p className="text-[80px] md:text-[120px] lg:text-[160px] text-[#fefefe] leading-none">
        {count}
      </p>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-semibold text-base md:text-lg lg:text-xl">{label}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-30 mb-20">
      {/* Responsive grid layout: 2 on sm, 3 on md, 4 on lg */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 mt-20 items-center justify-items-center">
        <Counter target={98} label="Projects" />
        <Counter target={65} label="People" />
        <Counter target={10} label="Years" />
        <Counter target={15} label="Offices" />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-20">
        <div className="w-full lg:w-[40%]">
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            creative solutions
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            We make unique & memorable brands
          </p>
        </div>

        <div className="w-full lg:w-[50%] space-y-6 md:space-y-8">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque lorem in voluptate
            velit iusto odio dignissimos duci esse.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
          <div className="group relative inline-block cursor-pointer">
            <p className="text-base md:text-lg pb-1">Read More</p>
            <div className="absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-500 ease-out w-full group-hover:w-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
