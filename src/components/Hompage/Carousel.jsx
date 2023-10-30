import React, { useState, useEffect } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

function Carousel() {
  const slides = [
    "/images/slider/image1.jpg",
    "/images/slider/image2.jpg",
    "/images/slider/image3.jpg",
    "/images/slider/image4.jpg",
    "/images/slider/image5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const goToNextSlide = () => {
    nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Auto transition every 5 seconds
    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [current]);

  return (
    <div className="w-[93%] m-auto overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((url, index) => {
          return (
            <img
              key={index}
              src={url}
              alt={`Slide ${index + 1}`}
              className="object-cover"
            />
          );
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white text-xl px-10">
        <button onClick={prevSlide}>
          <BiLeftArrow />
        </button>
        <button onClick={nextSlide}>
          <BiRightArrow />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-2 cursor-pointer  ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
