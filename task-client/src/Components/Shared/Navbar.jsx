import PropTypes from "prop-types";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import logo from "../../../src/assets/images/logo/logo.png";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); //#243447
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { logOut, user } = useContext(AuthContext);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = darkMode ? "#0077b6" : "white";
    body.style.color = darkMode ? "white" : "black";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const navItems = (
    <div className="lg:flex gap-6 font-semibold text-white">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-red-500 duration-300"
        }
        to="/"
      >
        <li>HOME</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-red-500 duration-300"
        }
        to="/contactUs"
      >
        <li>CONTACT US</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 border-b-[3px] pb-1 border-[transparent] "
            : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-red-500 duration-300"
        }
        to="/dashboard/CreateNewTask"
      >
        <li>DASHBOARD</li>
      </NavLink>
    </div>
  );

  // Logout
  const handleLogOut = () => {
    setLoading(true);
    logOut()
      .then(() => {
        console.log("Logged Out Successfully!");
        setLoading(false);
        Swal.fire({
          title: "Logged out!",
          text: `${
            user?.displayName ? user.displayName : "User"
          } logged out successfully!`,
          imageUrl: user?.photoURL
            ? user.photoURL || user.photoURL
            : "https://i.ibb.co/qnT81gF/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonText: "Ok!",
        });
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="navbar bg-black fixed z-20 bg-opacity-40 drop-shadow-lg px-2 md:px-8 lg:px-12 flex justify-between py-2 md:py-4">
    <div className="">
        <Link to="/" className="flex flex-row gap-2 items-center text-white font-bold">
          <img className="h-9  md:h-12" src={logo} alt="" />
          <div className="title flex flex-col">
            <p className="text-md md:text-3xl text-red-500">TaskZen</p>
          </div>
        </Link>
      </div>

      <div className="flex gap-8 items-center">
        <ul className="hidden lg:block menu menu-horizontal px-1">
          {navItems}
        </ul>

        <label className="swap swap-rotate hidden">
          <input type="checkbox" />
          {/* sun icon */}
          <BsSunFill
            onClick={() => setDarkMode(true)}
            className="swap-on  fill-current text-white text-2xl md:text-3xl"
          />
          {/* moon icon */}
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(false)}
            className=" c swap-off fill-current text-red-500 text-2xl md:text-3xl"
          />
        </label>
        <div>
        {user
          ?
          <FiLogOut onClick={handleLogOut} className="text-3xl text-red-500 cursor-pointer"/>
          :
          <Link to="/login">
            <FiLogIn  className="text-3xl cursor-pointer text-red-500"/>
          </Link>

          }
        </div>
        <div className="dropdown dropdown-end">
          <label className="swap swap-rotate lg:hidden">
            <input type="checkbox" />
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              className="swap-off  text-3xl md:text-4xl text-red-500 bg-[transparent] "
            />
            <RxCross2
              onClick={() => setOpen(!open)}
              className="swap-on text-3xl md:text-4xl text-red-500 bg-[transparent] "
            />
          </label>
         
          <ul
            className={`${
              open ? "block" : "hidden"
            } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-gray-200 border-2 border-gray-200 bg-opacity-70 drop-shadow-xl bg-black `}
          >
            {navItems}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.node,
};

export default Navbar;
