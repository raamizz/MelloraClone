import React from "react";

function NewsContainer() {
  const newsData = [
    {
      imageUrl: "/images/posters/Theweek.png",
      description: "Precious Jewellery Brand Melorra Brings Global Runw..",
    },
    {
      imageUrl: "/images/posters/ET.png",
      description: "Melorra is one of the fastest growing fine jeweller...",
    },
    {
      imageUrl: "/images/posters/ELLE.png",
      description: "Saroja Yeramilli , CEO and founder of the jewellery...",
    },
    {
      imageUrl: "/images/posters/Livemint.png",
      description: "In India , much of the affordable jewellery you buy...",
    },
    {
      imageUrl: "/images/posters/Entrepreneur.png",
      description: "Melorra is plotting to kill your bank locker: a loc...",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-12 mb-10">
      <div className="mt-9 grid grid-cols-2 md:grid-cols-5 gap-28 mr-10 ml-10">
        {newsData.map((item, index) => (
          <div key={index}>
            <img className="h-10 w-36 rounded-lg" src={item.imageUrl} alt="" />
            <p className=" mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsContainer;
