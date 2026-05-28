import {
  LayoutDashboard,
  UsersRound,
  Building2,
  CalendarOff,
  DollarSign,
  Clock,
  Megaphone,
  ClipboardList,
} from "lucide-react";
import { useContext } from "react";
import Data from "../../contexts/Data";
import { Link, useLocation } from "react-router-dom";
import Auth from "../../contexts/Auth";




// Admin Side Bar


const AdminSideBar = ({hide}) => {
  const location = useLocation();
  const data = useContext(Data);
  return (
    <aside
      className={`flex ${data.mobile ? "hidden" : "flex"} flex-col p-4 gap-4 ${hide ? "min-w-20" : "min-w-64"} h-[calc(100dvh-3.5rem)] bg-white border-r border-secondary-300 `}
    >
      <Link
        to="/app"
        className={`p-2.5 flex items-center gap-3 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"}  rounded-xl cursor-pointer ${location.pathname === "/app" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <LayoutDashboard
          className="h-5 w-5 shrink-0"
          size={20}
        ></LayoutDashboard>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Dashboard
        </p>
      </Link>
      <Link
        to="/app/tasks"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/tasks" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <ClipboardList className="h-5 w-5 shrink-0" size={20}></ClipboardList>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Tasks
        </p>
      </Link>
      <Link
        to="/app/employees"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/employees" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <UsersRound className="h-5 w-5 shrink-0" size={20}></UsersRound>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Employees
        </p>
      </Link>
      <Link
        to="/app/departments"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/departments" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Building2 className="h-5 w-5 shrink-0" size={20}></Building2>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Departments
        </p>
      </Link>
      <Link
        to="/app/leaves"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/leaves" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <CalendarOff className="h-5 w-5 shrink-0" size={20}></CalendarOff>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Leave Management
        </p>
      </Link>
      <Link
        to="/app/payroll"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/payroll" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <DollarSign className="h-5 w-5 shrink-0" size={20}></DollarSign>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Payroll
        </p>
      </Link>
      <Link
        to="/app/attendence"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/attendence" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Clock className="h-5 w-5 shrink-0" size={20}></Clock>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Attendance
        </p>
      </Link>
      <Link
        to="/app/announcements"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/announcements" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Megaphone className="h-5 w-5 shrink-0" size={20}></Megaphone>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Announcements
        </p>
      </Link>
    </aside>
  )
}

// Employee Side Bar

const EmployeeSideBar = ({hide}) => {
  const location = useLocation();
  const data = useContext(Data);
  return (
    <aside
      className={`flex ${data.mobile ? "hidden" : "flex"} flex-col p-4 gap-4 ${hide ? "min-w-20" : "min-w-64"} h-[calc(100dvh-3.5rem)] bg-white border-r border-secondary-300 `}
    >
      <Link
        to="/app"
        className={`p-2.5 flex items-center gap-3 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"}  rounded-xl cursor-pointer ${location.pathname === "/app" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <LayoutDashboard
          className="h-5 w-5 shrink-0"
          size={20}
        ></LayoutDashboard>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Dashboard
        </p>
      </Link>
      <Link
        to="/app/tasks"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/tasks" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <ClipboardList className="h-5 w-5 shrink-0" size={20}></ClipboardList>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Tasks
        </p>
      </Link>
      <Link
        to="/app/leaves"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/leaves" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <CalendarOff className="h-5 w-5 shrink-0" size={20}></CalendarOff>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Leave Management
        </p>
      </Link>
      <Link
        to="/app/attendence"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/attendence" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Clock className="h-5 w-5 shrink-0" size={20}></Clock>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Attendance
        </p>
      </Link>
      <Link
        to="/app/announcements"
        className={`p-2.5 ${hide ? "px-2.5 justify-center" : "px-4 justify-start"} flex items-center gap-3  rounded-xl cursor-pointer ${location.pathname === "/app/announcements" ? "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]" : "bg-transparent text-black hover:bg-secondary-100"}`}
      >
        <Megaphone className="h-5 w-5 shrink-0" size={20}></Megaphone>
        <p className={`font-semibold text-sm ${hide ? "hidden" : "flex"}`}>
          Announcements
        </p>
      </Link>
    </aside>
  )
}

const SideBar = ({ hide }) => {
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
  const newData = useContext(Auth)

  return (
    <>
    {newData.isAdmin?<AdminSideBar hide={hide}></AdminSideBar>:<EmployeeSideBar hide={hide}></EmployeeSideBar>}
    </>
  );
};

export default SideBar;
