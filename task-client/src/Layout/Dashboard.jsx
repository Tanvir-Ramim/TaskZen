import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
// import { IoMdMenu } from "react-icons/io";


const Dashboard = () => {
  const [expand, setExpand] = useState(false);
  const navItems = (
    <div className="flex flex-col mt-[60px] gap-6 font-semibold text-white">
       <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 border-b-[3px] w-fit px-2 pb-1 border-[transparent] "
            : "text-white border-b-[3px] w-fit px-2 pb-1 border-[transparent] hover:border-b-[3px] w-fit px-2 hover:border-red-500 duration-300"
        }
        to="/dashboard/profile"
      >
        <li>MY PROFILE</li>
      </NavLink>
    
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 border-b-[3px] w-fit px-2 pb-1 border-[transparent] "
            : "text-white border-b-[3px] w-fit px-2 pb-1 border-[transparent] hover:border-b-[3px] w-fit px-2 hover:border-red-500 duration-300"
        }
        to="/dashboard/CreateNewTask"
      >
        <li>CREATE A NEW TASK</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-red-500 border-b-[3px] w-fit px-2 pb-1 border-[transparent] "
            : "text-white border-b-[3px] w-fit px-2 pb-1 border-[transparent] hover:border-b-[3px] w-fit px-2 hover:border-red-500 duration-300"
        }
        to="/dashboard/toDoList"
      >
        <li onClick={() => setExpand(!expand)}>ALL TASKS LIST</li>
      </NavLink>
      <div className={expand ? "block -mt-4 ml-4 w-full" : "hidden"}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md text-red-500 border-none "
              : "text-md text-white w-fit hover:text-red-500 duration-300"
          }
          to="/dashboard/todo"
        >
          <li>
              <p>To-Do Tasks</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md text-red-500 border-none "
              : "text-md text-white w-fit hover:text-red-500 duration-300"
          }
          to="/dashboard/onGoing"
        >
          <li>
              <p>On-Going Tasks</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-md text-red-500 border-none "
              : "text-md text-white w-fit hover:text-red-500 duration-300"
          }
          to="/dashboard/completed"
        >
          <li>
              <p>Completed Tasks</p>
          </li>
        </NavLink>
      </div>
     
    </div>
  );
  return (
    <div className="">
      <div>
        {/* Drawer for large screens */}
        <div className="drawer block">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar  text-red-500">
              <div className="flex-none block">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 text-2xl">TaskZen</div>
              <div className="flex-none hidden">
                <ul className="menu menu-horizontal">{navItems}</ul>
              </div>
            </div>
            {/* Page content here */}
            <div className="w-[100vw] h-[100vh] pb-12 overflow-y-auto px-4 md:px-12">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-[200px] lg:w-[300px] min-h-full bg-black bg-opacity-70 text-red-500">
              {/* Sidebar content here */}
              {navItems}
              <div className="ml-2 pt-4 mt-12 border-t-2 border-red-500 w-full">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl text-red-500 border-none "
                      : "text-xl text-white w-fit hover:text-red-500 duration-300"
                  }
                  to="/"
                >
                  <li>
                    <div className="flex gap-2">
                      <div className="">
                        <IoHome />{" "}
                      </div>
                      <p>Home</p>
                    </div>
                  </li>
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
