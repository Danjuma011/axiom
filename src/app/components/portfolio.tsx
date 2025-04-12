"use client";
import React, { useEffect, useState } from "react";

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // Animation duration in ms
    const steps = 60; // Number of animation steps
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
    <div className="relative inline-block">
      <p className="text-[160px] text-[#fefefe] leading-none">{count}</p>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-semibold text-xl">{label}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="mx-30 mb-20">
      <div className="flex justify-between items-center mt-20">
        <Counter target={98} label="Projects" />
        <div className="h-16 w-[1px] bg-gray-300"></div>
        <Counter target={65} label="People" />
        <div className="h-16 w-[1px] bg-gray-300"></div>
        <Counter target={10} label="Years" />
        <div className="h-16 w-[1px] bg-gray-300"></div>
        <Counter target={15} label="Offices" />
      </div>

      <div className="flex justify-between mt-20">
        <div className="w-[40%]">
          <p className="mb-6 text-lg">creative solutions</p>
          <p className="text-5xl font-semibold">
            We make unique & memorable brands
          </p>
        </div>

        <div className="w-[50%] space-y-8">
          <p className="text-gray-400 text-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
            <br />
            blanditiis praesentium voluptatum deleniti atque lorem in voluptate{" "}
            <br /> velit iusto odio dignissimos duci esse.
          </p>
          <p className="text-gray-400 text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br />
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
            <br />
            quae.
          </p>
          <div className="group relative inline-block cursor-pointer">
            <p className="text-lg pb-1">Read More</p>
            <div className="absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-500 ease-out w-full group-hover:w-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
