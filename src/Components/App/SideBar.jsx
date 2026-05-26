import { LayoutDashboard, UsersRound, Building2, CalendarOff, DollarSign, Clock, Megaphone } from "lucide-react"
import { useContext } from "react"
import Data from "../../contexts/Data";


const SideBar = ({hide}) => {

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
  return (
    <aside className={`flex ${data.mobile?"hidden":"flex"} flex-col p-4 gap-4 ${hide?"min-w-20":"min-w-64"} h-[calc(100dvh-3.5rem)] bg-white border-r border-secondary-300 `}>
        <span className={`p-2.5 flex items-center gap-3 ${hide?"px-2.5 justify-center":"px-4 justify-start"} hover:bg-secondary-100 rounded-xl bg-primary-600 text-white`}>
            <LayoutDashboard className="h-5 w-5 shrink-0" size={20}></LayoutDashboard>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Dashboard</p>
        </span>
        <span className={`p-2.5 ${hide?"px-2.5 justify-center":"px-4 justify-start"} flex items-center gap-3 hover:bg-secondary-100 rounded-xl`}>
            <UsersRound className="h-5 w-5 shrink-0" size={20}></UsersRound>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Employees</p>
        </span>
        <span className={`p-2.5 ${hide?"px-2.5 justify-center":"px-4 justify-start"} flex items-center gap-3 hover:bg-secondary-100 rounded-xl`}>
            <Building2 className="h-5 w-5 shrink-0" size={20}></Building2>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Departments</p>
        </span>
        <span className={`p-2.5 ${hide?"px-2.5 justify-center":"px-4 justify-start"} flex items-center gap-3 hover:bg-secondary-100 rounded-xl`}>
            <CalendarOff className="h-5 w-5 shrink-0" size={20}></CalendarOff>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Leave Management</p>
        </span>
        <span className={`p-2.5 ${hide?"px-2.5 justify-center":"px-4 justify-start"} flex items-center gap-3 hover:bg-secondary-100 rounded-xl`}>
            <DollarSign className="h-5 w-5 shrink-0" size={20}></DollarSign>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Payroll</p>
        </span>
        <span className={`p-2.5 ${hide?"px-2.5 justify-center":"px-4 justify-start"} flex items-center gap-3 hover:bg-secondary-100 rounded-xl`}>
            <Clock className="h-5 w-5 shrink-0" size={20}></Clock>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Attendance</p>
        </span>
        <span className={`p-2.5 ${hide?"px-2.5 justify-center":"px-4 justify-start"} flex items-center gap-3 hover:bg-secondary-100 rounded-xl`}>
            <Megaphone className="h-5 w-5 shrink-0" size={20}></Megaphone>
            <p className={`font-semibold text-sm ${hide?"hidden":"flex"}`}>Announcements</p>
        </span>
        
    </aside>
  )
}

export default SideBar