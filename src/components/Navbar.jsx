// import useAuth from "../Hooks/useAuth";

import { NavLink } from "react-router";

const Navbar = () => {
  // const { logOut, googleSignIn, user } = useAuth();
  // const handleGoogle = ()=>{
  //    googleSignIn()
  //    .then((result)=>{
  //    console.log(result);
  //    })
  //    .catch((error)=>{
  //       console.log("error", error);
  //    })
  // }
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-green-600 border-green-600" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-gray-700 transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-green-600 border-green-600" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-gray-700 transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          About
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/product"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-green-600 border-green-600" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-gray-700 transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          Product
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `${
              isActive ? "border-b-2 text-green-600 border-green-600" : ""
            } font-medium px-2 py-2 rounded-md tracking-wide text-gray-700 transition-colors duration-1000 hover:text-deep-purple-accent-400`
          }
        >
          contact
        </NavLink>{" "}
      </li>
    </>
  );

  return (
    <>
      <div>
        <div>Jewellery-Shop</div>
        <div>
          <ul>{links}</ul>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
    {/* <button onClick={handleGoogle} className="btn">Google</button>
      <button onClick={()=>logOut()} className="btn">LogOut</button>
      <p>
        {
            user ? user?.email : "email nai"
        }
      </p> */}