import React from "react";

const categoryImages = [
  "/images/posters/Gram-1.jpg",
  "/images/posters/Gram-2.jpg",
  "/images/posters/Gram-3.jpg",
  "/images/posters/Gram-4.jpg",
];
const icons = [
  "/images/icons/instagram.svg",
  "/images/icons/twitter.svg",
  "/images/icons/facebook.svg",
  "/images/icons/youtube.svg",
];

function GramContainer() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h1 className="font-medium text-3xl items-center justify-between">
        From the 'Gram!'
      </h1>
      <p className="mt-2 text-center font-normal">
        See how we #unbore gold on Instagram! Moments you don't want to miss{" "}
      </p>
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-6">
        {categoryImages.map((imageUrl, index) => (
          <div key={index}>
            <img className="h-52 w-56 rounded-lg" src={imageUrl} alt="" />
          </div>
        ))}
      </div>
      <h1 className="font-medium text-3xl items-center justify-between mt-8">
        Share your #Melorra story with us{" "}
      </h1>
      <p className="mt-2 text-center font-normal bg-sky-500">
        Use the #Melorra in your instagram pics to get featured on our page
      </p>
      <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-6">
        {icons.map((imageUrl, index) => (
          <div key={index}>
            <img className="w-14 rounded-lg" src={imageUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GramContainer;
