import React from "react";

const menuItems = [
  {
    label: "Find a Store",
    iconSrc: "/images/icons/location.png",
  },
  {
    label: "Wishlist",
    iconSrc: "/images/icons/WishlistIcon.png",
  },
  {
    label: "Cart",
    iconSrc: "/images/icons/CartIcon.png",
  },
  {
    label: "Contact Us",
    iconSrc: "/images/icons/ContactIcon.png",
  },
  {
    label: "Profile",
    iconSrc: "/images/icons/UserIcon.png",
  },
];

function Menu() {
  return (
    <div className="flex items-start mr-20 space-x-4 font-black"style={{overflow:"hidden"}} >
      {menuItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="no-underline hover:underline flex flex-col items-center ..."
        >
          <img className="w-4 h-4" src={item.iconSrc} alt="" />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default Menu;