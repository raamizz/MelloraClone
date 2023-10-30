import React, { useState, useEffect, useMemo } from "react";

export default function BannerNav() {
  const texts = useMemo(
    () => [
      "WE OFFER SAFE AND SECURE SHIPPING",
      "USE OFFER5000 & GET 5000 ON MINI PURCHASE OF 1LAC",
    ],
    []
  );

  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(texts[currentIndex]);
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, texts]); 

  return (
    <div
      id="sticky-banner" 
      className=" z-40 flex justify-between p-1 border-b bg-black border-gray-200 dark:bg-black dark:border-gray-600"
    >
      <div className="flex items-center mx-auto">
        {/* <p className="flex items-center text-blue-gray-100 font-normal dark-text-gray-400 f"> */}
        <p className="flex items-center text-xxs md:text-xs lg:text-sm xl:text-base font-normal text-gray-500 dark:text-gray-400">

          <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark-bg-gray-600 w-6 h-6 items-center justify-center">
            <svg
              className="w-3 h-3 text-gray-500 dark-text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
            </svg>
            <span className="sr-only">Light bulb</span>
          </span>
          <span className="text-[10px]">{currentText}</span>
        </p>
      </div>
    </div>
  );
}