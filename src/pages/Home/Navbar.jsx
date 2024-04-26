import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../../../public/logo-removebg-preview.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => alert("user successfully logout"));
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/show-art"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        Art & Craft Gallery
      </NavLink>
      <NavLink
        to="/add-art"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        Add Art
      </NavLink>
      <NavLink
        to="/art-list"
        className={({ isActive }) =>
          isActive ? "text-[#FC8902]" : "hover:text-[#FC8902] opacity-75"
        }
      >
        My Art & Craft List
      </NavLink>
    </>
  );
  return (
    <div className="navbar max-w-6xl bg-[#111827] text-white fixed top-0 z-10">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl text-[#FC8902]">
          Art&CraftGallery
          <img src={logo} className="lg:size-10 size-5" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6 items-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user?.photoURL ? (
              <img
                title={user.displayName ? user.displayName : "Unknown"}
                src={user.photoURL}
              />
            ) : (
              <img
                alt="Tailwind CSS Navbar component"
                title="Unknown"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            )}
          </div>
        </div>
        {user ? (
          <NavLink
            onClick={handleLogOut}
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline text-[#FC8902]"
                : "btn btn-outline text-white opacity-75"
            }
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "btn btn-outline text-[#FC8902]"
                : "btn btn-outline text-white opacity-75"
            }
          >
            Login
          </NavLink>
        )}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="px-0 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-center top-8 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
