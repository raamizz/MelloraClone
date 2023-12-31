import React from "react";
import Logo from "../Logo/Logo";

const menuItems = [
  { title: "Offers", href: "#" },
  { title: "Find a store", href: "#" },
  { title: "Contact Us", href: "#" },
  { title: "Cart", href: "#" },
];

function MainNav() {
  return (
    <div>
      {/* Main navigation container */}
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-white lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-10">
          {/* ham menu */}
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent13"
            data-te-collapse-item
          >
            <div className="pr-3">
              <Logo style={"h-3 w-auto"}/>
            </div>

            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1`}
                  data-te-nav-item-ref
                >
                  <a
                    className={`text-black  hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-black dark:hover:text-blue-950 dark:focus:text-blue-800 lg:px-2 ${
                      index === 0
                        ? "active:text-black/90 dark:active:text-neutral-400"
                        : ""
                    }`}
                    href={item.href}
                    data-te-nav-link-ref
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-[300px] lg:pr-2">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border  border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />

                {/* Search button */}
                <button
                  className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary bg-gray-300 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none"
                  type="button"
                  id="button-addon3"
                  data-te-ripple-init
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
