import React from "react";

function BudgetContainer() {
  const collections = [
    {
      id: 1,
      src: "/images/posters/Under-10k.jpg",
      alt: "Collection 1",
      name: "280 Styles",
      description: "Under 10K",
    },
    {
      id: 2,
      src: "/images/posters/Under-20k.jpg",
      alt: "Collection 2",
      name: "3200 Styles",
      description: "Under 20k",
    },
    {
      id: 3,
      src: "/images/posters/Under-30k.jpg",
      alt: "Collection 3",
      name: "6900 Styles",
      description: "Under 30k",
    },
    {
      id: 4,
      src: "/images/posters/Under-50k.jpg",
      alt: "Collection 4",
      name: "7000 Styles",
      description: "Under 50k",
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center mt-14 text-center mb-10">
      <h1 className="text-3xl font-medium text-black">Shop On a Budget</h1>
      <p className="text-1xl font-extralight text-gray-700 mb-3">
        Affordable isn't just a word - It's our motto
      </p>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="text-center"
            style={{
              backgroundImage: `url(${collection.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-64 h-64 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-sans text-white mt-2">
                {collection.name}
              </h1>
              <p className="text-1xl text-white font-semibold mb-3">
                {collection.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BudgetContainer;
