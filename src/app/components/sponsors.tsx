import React from "react";
import Image from "next/image";
import img1 from "../../../public/img/codan.webp";
import img2 from "../../../public/img/network.webp";
import img3 from "../../../public/img/orca.webp";
import img4 from "../../../public/img/minagod.webp";
import img5 from "../../../public/img/br.webp";
import img6 from "../../../public/img/arquivar.webp";

const Sponsors = () => {
  const sponsors = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 px-4 sm:px-10 md:px-20 mt-20 mb-40 text-gray-200 text-center">
      {sponsors.map((img, index) => (
        <div
          key={index}
          className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        >
          <Image
            src={img}
            alt={`Sponsor ${index + 1}`}
            width={200}
            height={60}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
