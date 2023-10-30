import React from "react";

function BestSellerContainer() {
  const products = [
    {
      id: 1,
      src: "/images/products/Aphrodite.png",
      alt: "Aprhodite Rose Gold Rings",
      link: "#",
      cutDownPrice: "₹15,075",
      currentPrice: "₹14,309",
      offer: "20% OFF On Making Charges",
    },
    {
      id: 2,
      src: "/images/products/BevelChain.png",
      alt: "22kt Bevel chain Gold Chains",
      link: "#",
      cutDownPrice: "₹29,902",
      currentPrice: "₹28,798",
      offer: "Flat 25% OFF on Product Value",
    },
    {
      id: 3,
      src: "/images/products/Peekaboo.png",
      alt: "Peek A Boo Gold Earrings",
      link: "#",
      cutDownPrice: "₹33,689",
      currentPrice: "₹31,917",
      offer: "15% OFF On Making Charges",
    },
    {
      id: 4,
      src: "/images/products/Boxchain.png",
      alt: "22kt Box chain Gold Chains",
      link: "#",
      cutDownPrice: "₹38,259",
      currentPrice: "₹36,529",
      offer: "15% OFF On Making Charges",
    },
    {
      id: 4,
      src: "/images/products/Boxchain.png",
      alt: "22kt Box chain Gold Chains",
      link: "#",
      cutDownPrice: "₹38,259",
      currentPrice: "₹36,529",
      offer: "20% OFF On Making Charges",
    },
    // Add more products as needed
  ];

  return (
    <div className=" flex flex-col justify-between items-center mt-14 text-center mb-10">
      <h1 className="text-3xl font-medium text-black">Meet Our Bestsellers</h1>
      <p className="text-1xl font-extralight text-gray-700 mb-3">
        Styles that everyone is falling in love with!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
        {products.map((product) => (
          <a key={product.id} href={product.link}>
            <div className="w-full max-w-sm bg-white border border-gray-600 rounded-lg shadow dark:bg-white dark:border-gray-700">
              <img
                className="p-8 rounded-t-lg h-56 object-cover"
                src={product.src}
                alt={product.alt}
              />
              <div className="px-5 pb-2">
                <h5 className="text-sm font-light tracking-tight text-gray-900 dark:text-white">
                  {product.alt}
                </h5>
                <div className="flex justify-between mt-2">
                  <span className="text-black text-sm line-through">
                    {product.cutDownPrice}
                  </span>
                  <span className="text-red-600 text-lg font-semibold">
                    {product.currentPrice}
                  </span>
                </div>
                <span className="text-green-700 text-sm">{product.offer}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button
        type="button"
        className="mt-10 text-white bg-red-600 hover-bg-red-900 focus-ring-4 focus-outline-none focus-ring-red-400 font-serif rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark-bg-red-600 dark-hover-bg-red-900 dark-focus-ring-red-400"
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

export default BestSellerContainer;
