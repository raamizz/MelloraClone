import React from "react";

const categoryImages = [
  {
    imageUrl: "/images/posters/Ring_Categ.png",
    title: "Rings",
    description:"Starts from ₹9073"
  },
  {
    imageUrl: "/images/posters/Earring_Categ.png",
    title: "Earrings",
    description:"Starts from ₹7473"
  },
  {
    imageUrl: "/images/posters/Chains_Categ.png",
    title: "Chains",
    description:"Starts from ₹10235"
  },
  {
    imageUrl: "/images/posters/Bangel_Categ.png",
    title: "Bangles",
    description:"Starts from ₹21712"
  },
  {
    imageUrl: "/images/posters/Pendant_Categ.png",
    title: "Pendants",
    description:"Starts from ₹5287"
  },
  {
    imageUrl: "/images/posters/Necklace_categ.png",
    title: "Necklaces",
    description:"Starts from ₹31440"
  },
];

function ShopbyCategoryContainer() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h1 className="font-medium text-3xl items-center justify-between">
        Shop By Categories
      </h1>
      <div className="mt-9 grid grid-cols-2 md:grid-cols-6 gap-6">
        {categoryImages.map((category, index) => (
          <div key={index}>
            <img
              className="h-44 w-44 rounded-lg"
              src={category.imageUrl}
              alt={category.title}
            />
            <p className="mt-2 text-center font-semibold">{category.title}</p>
            <p className="text-center font-light">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopbyCategoryContainer;
