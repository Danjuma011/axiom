"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import img1 from "../../../public/img/image1.jpg";
import img2 from "../../../public/img/image2.jpg";
import img3 from "../../../public/img/image4.jpg";
import img4 from "../../../public/img/image10.jpg";

const images = [img1, img2, img3, img4];

const Articles = () => {
  const totalDots = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalDots);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const getSlideImages = () => {
    return [
      images[currentIndex % images.length],
      images[(currentIndex + 1) % images.length],
      images[(currentIndex + 2) % images.length],
    ];
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-20 mb-30">
      <div className="text-center mb-8">
        <p className="text-sm mb-4">Our Blog</p>
        <p className="text-5xl font-semibold">Latest Articles</p>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-5 transition-all duration-500 px-10">
          {getSlideImages().map((img, index) => (
            <div key={index} className="min-w-[33.33%]">
              <Image
                src={img}
                alt={`article-${index}`}
                width={400}
                height={500}
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg border-4"
              />
              <p className="mt-4 text-sm text-gray-600">MEDIA SEO</p>
              <p className="mt-3 text-xl font-medium">
                What&apos;s trending on designers <br /> charts and spring
              </p>
              <div className="flex gap-2 items-center text-gray-400 mt-3 text-sm">
                <span>April 21, 2020</span>
                <span className="text-xl leading-none">•</span>
                <span>0 comments</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {[...Array(totalDots)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-purple-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
