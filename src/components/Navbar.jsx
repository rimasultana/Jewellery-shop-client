import { useState } from "react";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePhone,
  AiOutlineLogin,
} from "react-icons/ai";
import { FaRegListAlt, FaPlusCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";

export const Navbar = () => {
  const { logOut, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-pink-700 border-pink-700" : ""
            } text-white font-medium px-2 py-2 rounded-md tracking-wide transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          <AiOutlineHome className="inline-block mr-2" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-pink-500 border-pink-500" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-white transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          <AiOutlineInfoCircle className="inline-block mr-2" />
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/product"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-pink-700 border-pink-700" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-white transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          <FaRegListAlt className="inline-block mr-2" />
          Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addproduct"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-pink-700 border-pink-700" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-white transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          <FaPlusCircle className="inline-block mr-2" />
          Add product
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-pink-700 border-pink-700" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-white transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          <AiOutlinePhone className="inline-block mr-2" />
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-900 sticky top-0 z-10">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center justify-start">
            <h1 className="inline-flex items-center">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Jewe<span className="text-pink-500">ll</span>ery{" "}
                <span className="text-pink-500">S</span>hop
              </span>
            </h1>
          </div>

          <ul className="flex items-center space-x-2 lg:flex hidden mx-auto">
            {links}
          </ul>

          <ul className="flex items-center justify-center hidden lg:flex">
            {user ? (
              <p
                onClick={logOut}
                className="btn bg-pink-500 text-white flex items-center"
              >
                <IoLogOut className="mr-2" />
                Log Out
              </p>
            ) : (
              <li>
                <NavLink
                  to={"/login"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-2 text-pink-500 border-pink-500" : ""
                    } font-medium px-2 py-2 rounded-md tracking-wide text-white transition-colors duration-1000 hover:text-deep-purple-accent-400 flex items-center`
                  }
                >
                  <AiOutlineLogin className="mr-2" />
                  Sign in
                </NavLink>
              </li>
            )}
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <IoMenu className="w-10 text-white" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Je<span className="text-pink-500">weller</span>y Shop
                        </span>
                      </h2>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <GiTireIronCross />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{links}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
