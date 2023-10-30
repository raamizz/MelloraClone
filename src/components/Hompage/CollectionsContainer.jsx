import React from "react";

function CollectionsContainer() {
  const collections = [
    {
      id: 1,
      src: "/images/posters/Discover1.png",
      alt: "Collection 1",
      name: "Bold Blooms",
    },
    {
      id: 2,
      src: "/images/posters/Discover2.png",
      alt: "Collection 2",
      name: "Power Dressing",
    },
    {
      id: 3,
      src: "/images/posters/Discover3.png",
      alt: "Collection 3",
      name: "Crochet Craze",
    },
    {
      id: 4,
      src: "/images/posters/Discover4.png",
      alt: "Collection 4",
      name: "Double Denim",
    },
  ];

  return (
    <div className=" flex flex-col justify-between items-center mt-14 text-center">
      <h1 className="text-3xl font-medium text-gray-800">
        Discover Our Collections
      </h1>
      <p className="text-1xl font-extralight text-gray-700 mb-3">
        From the runways of Milan, Paris & London, right into your jewelry box!
      </p>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
        {collections.map((collection) => (
          <div key={collection.id} className="text-center">
            <img
              className="w-64 rounded-lg mb-2"
              src={collection.src}
              alt={collection.alt}
            />
            <h1 className="text-2xl font-serif text-gray-900 mt-2">
              {collection.name}
            </h1>
            <p className="text-1xl font-extralight text-gray-700 mb-3">
              Collection
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-10 text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-400 font-serif rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-900 dark:focus:ring-red-400"
      >
        View all Collections
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

export default CollectionsContainer;
