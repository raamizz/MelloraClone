import React from "react";

const categoryImages = [
     "/images/posters/Ad-1.png",
    "/images/posters/Ad-2.png",
    "/images/posters/Ad-3.png",
];

function AdContainer() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="mt-9 grid grid-cols-2 md:grid-cols-3 gap-6 mr-10 ml-10">
        {categoryImages.map((imageUrl, index) => (
          <div key={index}>
            <img
              className="h-full w-full rounded-lg"
              src={imageUrl}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdContainer;
