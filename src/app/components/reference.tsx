// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import femaleImg from "../../../public/img/girl.webp";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// const Reference = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       quote:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua.",
//       name: "John Doe",
//       role: "Expert",
//     },
//     {
//       id: 2,
//       quote:
//         "Sandy Williams Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
//       name: "Sandy Williams",
//       role: "CEO, Business Co.",
//     },
//     {
//       id: 3,
//       quote:
//         "Paul Freeman Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       name: "Paul Freeman",
//       role: "Expert",
//     },
//   ];

//   const handleClick = () => {
//     setIsChecked(!isChecked);
//   };

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <>
//       <div className="flex justify-between mx-20 mt-30 mb-20">
//         <p className="text-5xl font-semibold">
//           Subscribe for the <br /> exclusive updates!
//         </p>
//         <div>
//           <div className="flex space-x-5">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="w-[500px] bg-[#fefefe] px-4 py-3 rounded-4xl"
//             />
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-4xl"
//             >
//               Subscribe
//             </button>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               type="button"
//               className={`w-5 h-5 mt-[14px] rounded-md border-4 flex items-center justify-center
//                 ${
//                   isChecked ? "bg-black border-white" : "bg-white border-white"
//                 }`}
//               onClick={handleClick}
//             >
//               {isChecked && <div className="w-3 h-3 rounded-lg bg-black"></div>}
//             </button>
//             <p className="mt-4 text-gray-400 cursor-pointer items-center">
//               I agree to the{" "}
//               <span className="text-sm underline hover:text-[#000000]">
//                 privacy policy
//               </span>{" "}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Testimonial Carousel */}
//       <div className="relative  mx-30 mt-30 mb-20 ">
//         <div className="flex flex-col items-center text-center px-40 ">
//           <Image
//             src={femaleImg}
//             alt={`${testimonials[currentTestimonial].name} portrait`}
//             width={70}
//             height={70}
//             className="rounded-full shadow-lg border-4 border-white object-cover"
//           />
//           <p className="my-6 italic text-2xl text-gray-600">
//             {testimonials[currentTestimonial].quote}
//           </p>
//           <span className="text-[#96d5e3] text-5xl mb-4">&quot;</span>
//           <p className="font-semibold text-lg">
//             {testimonials[currentTestimonial].name}
//           </p>
//           <p className="text-gray-500">
//             {testimonials[currentTestimonial].role}
//           </p>
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevTestimonial}
//           className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full border-2 border-gray-300 hover:border-[#96d5e3] hover:text-[#96d5e3] transition-colors"
//           aria-label="Previous testimonial"
//         >
//           <BsArrowLeft size={24} />
//         </button>

//         <button
//           onClick={nextTestimonial}
//           className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full border-2 border-gray-300 hover:border-[#96d5e3] hover:text-[#96d5e3] transition-colors"
//           aria-label="Next testimonial"
//         >
//           <BsArrowRight size={24} />
//         </button>

//         {/* Indicators */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentTestimonial(index)}
//               className={`w-2 h-2 rounded-full ${
//                 index === currentTestimonial ? "bg-blue-600" : "bg-blue-300"
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Reference;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import femaleImg from "../../../public/img/girl.webp";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Reference = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      role: "Expert",
    },
    {
      id: 2,
      quote:
        "Sandy Williams Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.",
      name: "Sandy Williams",
      role: "CEO, Business Co.",
    },
    {
      id: 3,
      quote:
        "Paul Freeman Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Paul Freeman",
      role: "Expert",
    },
  ];

  const handleClick = () => setIsChecked(!isChecked);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Subscribe Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 px-6 md:px-16 lg:px-20 mt-10 mb-20">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Subscribe for the <br /> exclusive updates!
        </p>

        <div className="w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] bg-[#fefefe] px-4 py-3 rounded-4xl"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-4xl"
            >
              Subscribe
            </button>
          </div>
          <div className="flex items-start gap-2 mt-4">
            <button
              type="button"
              className={`w-5 h-5 mt-[6px] rounded-md border-4 flex items-center justify-center 
              ${isChecked ? "bg-black border-white" : "bg-white border-white"}`}
              onClick={handleClick}
            >
              {isChecked && <div className="w-3 h-3 rounded-lg bg-black" />}
            </button>
            <p className="text-sm text-gray-400 cursor-pointer">
              I agree to the{" "}
              <span className="underline hover:text-black">privacy policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative px-6 md:px-16 lg:px-30 mt-20 mb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <Image
            src={femaleImg}
            alt={`${testimonials[currentTestimonial].name} portrait`}
            width={70}
            height={70}
            className="rounded-full shadow-lg border-4 border-white object-cover"
          />
          <p className="my-6 italic text-base sm:text-xl md:text-2xl text-gray-600">
            {testimonials[currentTestimonial].quote}
          </p>
          <span className="text-[#96d5e3] text-4xl sm:text-5xl mb-4">
            &quot;
          </span>
          <p className="font-semibold text-lg">
            {testimonials[currentTestimonial].name}
          </p>
          <p className="text-gray-500">
            {testimonials[currentTestimonial].role}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full border-2 border-gray-300 hover:border-[#96d5e3] hover:text-[#96d5e3] transition-colors"
          aria-label="Previous testimonial"
        >
          <BsArrowLeft size={20} />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full border-2 border-gray-300 hover:border-[#96d5e3] hover:text-[#96d5e3] transition-colors"
          aria-label="Next testimonial"
        >
          <BsArrowRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === currentTestimonial ? "bg-blue-600" : "bg-blue-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reference;
