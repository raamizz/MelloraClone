import React from "react";

const TrustCard = ({ iconSrc, title, description }) => {
  return (
    <div className="px-5 flex flex-col gap-1 items-center justify-center mt-10">
      <img src={iconSrc} alt="icon_img" className="w-7 h-7" />
      <h3 className="font-semibold whitespace-break-spaces">{title}</h3>
      <p className="text-xs whitespace-break-spaces">{description}</p>
    </div>
  );
};

function SpaceEvenlyContainer() {
  // Data for each section
  const sections = [
    {
      title: "BIS Hallmarked jewellery",
      description:
        "SGL & IGI ceritified diamonds, 100% real and authentic Jewellery",
      iconSrc: "/images/icons/BIS-Hallmark-Color.png",
    },
    {
      title: "Cash / Card on delivery",
      description: "Available across 25,000 pincodes",
      iconSrc: "/images/icons/CashOnDelivery.png", // Add the icon source here
    },
    {
      title: "Lifetime Exchange",
      description: "Get 100% of the gold value at prevailing market rates",
      iconSrc: "/images/icons/exchange.png", // Add the icon source here
    },
    {
      title: "30 Day return policy",
      description:
        "100% refund, no questions asked. Doorstep pick up and return*",
      iconSrc: "/images/icons/return-box.png", // Add the icon source here
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row gap-3 md:gap-10 mt-10 mb-10">
      {sections?.map((section, index) => (
        <TrustCard key={index} {...section} />
      ))}
    </div>
  );
}

export default SpaceEvenlyContainer;
