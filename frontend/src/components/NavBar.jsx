import React, { useState } from "react";
import { HiMiniBars3BottomLeft, HiOutlineUser } from "react-icons/hi2";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const NavBar = () => {
  const currentUser = false;
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log(cartItems);
  return (
    <header className="max-w-screen-xl mx-auto px-4 py-6">
      <nav className=" flex justify-between items-center">
        {/* {left} */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3BottomLeft className="size-6" />
          </Link>

          <div className="relative sm:w-72 sm:bg-amber-50 w-40 space-x-2">
            <IoSearch className="absolute left-3 inline-block inset-y-2" />
            <input
              type="text"
              placeholder=" Search"
              className="bg-[#EAEAEA] w-full py-1 md:px-8  px-6 focus:outline-none rounded-md"
            />
          </div>
        </div>

        {/* {right} */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setisDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={Avatar}
                    alt=""
                    className={`rounded-full size-7 ${
                      currentUser ? "ring-2 ring-blue-400 " : ""
                    }`}
                  />
                </button>
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-4 w-48  bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          className=" px-4 py-2 text-sm block hover:bg-gray-100"
                        >
                          <Link
                            to={item.href}
                            onClick={() => setisDropDownOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link to="/login">
                  <HiOutlineUser className="size-6" />
                </Link>
              </>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="flex items-center p-1 bg-[#FFCE1A] sm:px-6 px-2 rounded-sm"
          >
            <IoCartOutline />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
