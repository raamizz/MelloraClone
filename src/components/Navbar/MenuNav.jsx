import React from "react";
import { Link } from "react-router-dom";

function MenuNav() {
  const data = [
    "New Arrival",
    "14 karet",
    "Rings",
    "Earrings",
    "Pendants",
    "Chains",
    "Solitaires",
    "All Jewellery",
    "Mens Jewellery",
    "Second Ear Piercing",
  ];
  return (
    <div>
      <div
        className="hidden lg:block px-10 md:px-20 py-2 border-t border-b border-black "
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul className="flex justify-evenly">
          {data.map((item) => (
            <li>
              <Link className="text-sm font-medium hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MenuNav