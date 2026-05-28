import { Bell, BellRing, SidebarClose, SidebarOpen } from "lucide-react";
import { useContext } from "react";
import Data from "../../contexts/Data";


const Header = ({ hide, setHide }) => {
    const data = useContext(Data);
  return (
    <header className="flex justify-between sticky top-0 items-center h-14 w-full bg-white px-4 duration-300 ease-in-out transition-all border-b border-secondary-300">
      <div className="flex justify-between items-center gap-4">
        <span
         className={`${data.mobile?"hidden":"flex"} p-2.5 cursor-pointer rounded-xl`}
         onClick={()=>[
            hide?setHide(false):setHide(true)
        ]}>{hide?<SidebarOpen className="animate-fade-in"></SidebarOpen>:<SidebarClose className="animate-fade-in"></SidebarClose>}</span>
        <h1 className="text-2xl cursor-pointer font-bold text-primary-700">
          UMJI EMS
        </h1>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Bell></Bell>
        {/* <BellRing></BellRing> */}
        <div
          onClick={() => {
            new Notification("UMJI EMS");
          }}
          className="userIcon flex justify-center items-center p-4 text-xl bg-primary-600 text-white font-semibold rounded-full aspect-square w-9 h-9"
        >
          G
        </div>
      </div>
    </header>
  );
};

export default Header;
