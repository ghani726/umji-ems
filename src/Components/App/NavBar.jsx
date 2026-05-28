import {
  LayoutDashboard,
  UsersRound,
  Building2,
  CalendarOff,
  DollarSign,
  Clock,
  Megaphone,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";
import { useContext, useState } from "react";
import Data from "../../contexts/Data";
import { Link, useLocation } from "react-router-dom";
import Auth from "../../contexts/Auth";

// Admin Side Bar

const AdminNavBar = () => {
  const location = useLocation();
  const data = useContext(Data);

  const [showNavMenu, setShowNavMenu] = useState(false);

  return (
    <>
      <nav
        className={`flex ${data.mobile ? "flex" : "hidden"} justify-around items-center border-t border-t-secondary-300 gap-4 px-2.5 h-16 bg-white`}
      >
        <Link
          to="/app"
          className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <LayoutDashboard
            className="h-5 w-5 shrink-0"
            size={20}
          ></LayoutDashboard>
          <p className={`text-xs`}>Dashboard</p>
        </Link>
        <Link
          to="/app/tasks"
          className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/tasks" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <ClipboardList
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></ClipboardList>
          <p className={`text-xs`}>Tasks</p>
        </Link>
        <Link
          to="/app/attendence"
          className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/attendence" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <Clock
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></Clock>
          <p className={`text-xs`}>Attendance</p>
        </Link>
        <Link
          to="/app/alerts"
          className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/alerts" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <Megaphone
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></Megaphone>
          <p className={`text-xs`}>Alerts</p>
        </Link>
        <Link
          className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer bg-transparent text-black hover:bg-secondary-100`}
          onClick={() => {
            showNavMenu ? setShowNavMenu(false) : setShowNavMenu(true);
          }}
        >
          {showNavMenu ? (
            <X className="h-5 w-5 shrink-0 animate-fade-in" size={30} strokeWidth={2.2}></X>
          ) : (
            <Menu className="h-5 w-5 shrink-0 animate-fade-in" size={24} strokeWidth={2.2}></Menu>
          )}
          <p className={`text-xs`}>More</p>
        </Link>
      </nav>
      <div
        style={{ display: showNavMenu ? "flex" : "none" }}
        className="menu z-10 flex flex-col items-start justify-center p-2 bg-white absolute right-2 animate-slide-in-up bottom-16.5 gap-2 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] "
      >
        <Link
          to="/app/employees"
          onClick={() => {
            setShowNavMenu(false);
          }}
          className={` p-2 w-full text-left rounded-lg cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2 ${location.pathname === "/app/employees" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <UsersRound
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></UsersRound>
          <p className={`text-xs`}>Employees</p>
        </Link>
        <Link
          to="/app/departments"
          onClick={() => {
            setShowNavMenu(false);
          }}
          className={` p-2 w-full text-left rounded-lg cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2 ${location.pathname === "/app/departments" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <Building2
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></Building2>
          <p className={`text-xs`}>Departments</p>
        </Link>
        <Link
          to="/app/leaves"
          onClick={() => {
            setShowNavMenu(false);
          }}
          className={` p-2 w-full text-left rounded-lg cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2 ${location.pathname === "/app/leaves" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <CalendarOff
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></CalendarOff>
          <p className={`text-xs`}>Leaves</p>
        </Link>
        <Link
          to="/app/payroll"
          onClick={() => {
            setShowNavMenu(false);
          }}
          className={` p-2 w-full text-left rounded-lg cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2 ${location.pathname === "/app/payroll" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
        >
          <DollarSign
            className="h-5 w-5 shrink-0"
            size={24}
            strokeWidth={2.2}
          ></DollarSign>
          <p className={`text-xs`}>Payroll</p>
        </Link>
      </div>
    </>
  );
};

// Employee Side Bar

const EmployeeNavBar = () => {
  const location = useLocation();
  const data = useContext(Data);
  return (
    <nav
      className={`flex ${data.mobile ? "flex" : "hidden"} gap-4 h-16 items-center justify-around px-2.5 border-t border-t-secondary-300 bg-white`}
    >
      <Link
        to="/app"
        className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1  rounded-xl cursor-pointer ${location.pathname === "/app" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <LayoutDashboard
          className="h-5 w-5 shrink-0"
          size={24}
          strokeWidth={2.2}
        ></LayoutDashboard>
        <p className={`text-xs`}>Dashboard</p>
      </Link>
      <Link
        to="/app/tasks"
        className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/tasks" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <ClipboardList
          className="h-5 w-5 shrink-0"
          size={24}
          strokeWidth={2.2}
        ></ClipboardList>
        <p className={`text-xs`}>Tasks</p>
      </Link>
      <Link
        to="/app/leaves"
        className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/leaves" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <CalendarOff
          className="h-5 w-5 shrink-0"
          size={24}
          strokeWidth={2.2}
        ></CalendarOff>
        <p className={`text-xs`}>Leaves</p>
      </Link>
      <Link
        to="/app/attendence"
        className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/attendence" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Clock className="h-5 w-5 shrink-0" size={24} strokeWidth={2.2}></Clock>
        <p className={`text-xs`}>Attendance</p>
      </Link>
      <Link
        to="/app/alerts"
        className={`p-2 flex flex-col min-w-14 max-w-38 justify-center items-center gap-1 rounded-xl cursor-pointer ${location.pathname === "/app/alerts" ? "text-primary-700 hover:bg-secondary-100" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Megaphone
          className="h-5 w-5 shrink-0"
          size={24}
          strokeWidth={2.2}
        ></Megaphone>
        <p className={`text-xs`}>Alerts</p>
      </Link>
    </nav>
  );
};
const NavBar = () => {
  //Responsive Ness of Header
  const displayCheck = () => {
    if (window.innerWidth <= 620) {
      data.setMobile(true);
    } else if (window.innerWidth > 620) {
      data.setMobile(false);
    }
  };

  //On page resize (Responsiveness)
  window.addEventListener("resize", displayCheck);

  //On page reload (Responsiveness)
  window.addEventListener("load", displayCheck);
  const data = useContext(Data);
  const newData = useContext(Auth);
  return (
    <>
      {newData.isAdmin ? (
        <AdminNavBar></AdminNavBar>
      ) : (
        <EmployeeNavBar></EmployeeNavBar>
      )}
    </>
  );
};

export default NavBar;
