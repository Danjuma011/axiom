import React from "react";
import Image from "next/image";
import img1 from "../../../public/img/image-1.webp";
import img2 from "../../../public/img/image-2.webp";
import img3 from "../../../public/img/image-3.png";
import img4 from "../../../public/img/image-4.png";
import img5 from "../../../public/img/image-5.png";
import img6 from "../../../public/img/image-6.webp";

const Carousel = () => {
  const images = [
    { src: img1, alt: "Image 1", width: 400, height: 300 },
    { src: img2, alt: "Image 2", width: 400, height: 600 },
    { src: img3, alt: "Image 3", width: 400, height: 300 },
    { src: img4, alt: "Image 4", width: 400, height: 600 },
    { src: img5, alt: "Image 5", width: 400, height: 300 },
    { src: img6, alt: "Image 6", width: 400, height: 600 },
  ];

  return (
    <div className="px-4 sm:px-10 lg:px-20 py-4">
      <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar items-center justify-start">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
