import { Bell, BellRing, SidebarClose, SidebarOpen } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between sticky top-0 items-center h-14 w-full bg-white px-4 duration-300 ease-in-out transition-all">
      <div className="flex justify-between items-center gap-4">
        <SidebarClose></SidebarClose>
        {/* <SidebarOpen></SidebarOpen> */}
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
