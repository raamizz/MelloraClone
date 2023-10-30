import React from "react";

const exclusiveItems = [
  {
    imageUrl: "/images/posters/Exclusives3.jpg",
    overlayColor: "bg-red-700",
    overlayOpacity: "opacity-0",
    hoverOpacity: "hover:opacity-30",
    altText: "Louvre",
    title: "#LoveStartsWithSelf", 
  },
  {
    imageUrl: "/images/posters/Exclusives1.jpg",
    overlayColor: "bg-white",
    overlayOpacity: "opacity-0",
    hoverOpacity: "hover:opacity-40",
    altText: "Louvre",
    title: "Solitare Rings",
  },
  {
    imageUrl: "/images/posters/Exclusives2.jpg",
    overlayColor: "bg-blue-400",
    overlayOpacity: "opacity-0",
    hoverOpacity: "hover:opacity-60",
    altText: "Louvre",
    title: "Modular", 
  },
];

function ExclusiveContainer() {
  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="font-medium text-3xl items-center justify-between">
        Shop Our Exclusives
      </h1>
      <p className="mb-7">Especially curated gold jewellery for all your styling needs!</p>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 items-center ml-10 mb-10">
        {exclusiveItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="w-full h-96 max-w-full rounded-lg">
              <div
                className="w-96 h-full bg-cover bg-no-repeat  hover:opacity-25 transition duration-300 cursor-pointer "
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                }}
              >
                <p className="text-white text-center text-lg font-medium pt-5 bg-gray-600 pb-4" style={{
                    background: "rgba(128, 128, 128, 0.9)", // Adjust the color and opacity as needed
                  }}>
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <button
        type="button"
        className="mt-1 pt-4 text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-400 font-serif rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-red-400"
      >
        VIEW ALL
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
}

export default ExclusiveContainer;



