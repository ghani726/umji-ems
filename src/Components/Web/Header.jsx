import { useContext, useState } from "react";
import {
    Cross,
  DollarSign,
  HomeIcon,
  MenuIcon,
  Phone,
  X,
} from "lucide-react";
import Data from "../../contexts/Data";
const Header = () => {
  const data = useContext(Data);

  const [min, setMin] = useState(false);
  const [showNav, setShowNav] = useState(false)

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 620) {
      data.setMobile(true);
    } else if (window.innerWidth > 620) {
      data.setMobile(false);
    }
    if (window.innerWidth <= 420) {
      setMin(true);
      console.log("Hello");
    } else if (window.innerWidth > 420 && window.innerWidth < 620) {
      setMin(false);
    }
  });
//   window.addEventListener("click", ()=>{
//     setShowNav(false)
//   })
  return (
    <header className="flex justify-between items-center h-14 w-full bg-white px-8 duration-300 ease-in-out transition-all">
      <h1 className="text-2xl cursor-pointer font-bold text-primary-700">UMJI EMS</h1>
      <nav
        style={{ display: data.mobile ? "none" : "flex" }}
        className="flex justify-between items-center gap-8 duration-300 ease-in-out transition-all"
      >
        <h4 className="cursor-pointer">Home</h4>
        <h4 className="cursor-pointer">Pricing</h4>
        <h4 className="cursor-pointer">Contact</h4>
      </nav>
      <div className="flex justify-between items-center gap-2">
        <button
          style={{ display: min ? "none" : "flex" }}
          className=" px-4 py-1.5 font-semibold cursor-pointer rounded-xl"
        >
          Login
        </button>
        <button
          style={{ display: min ? "none" : "flex" }}
          className="bg-primary-600 hover:bg-primary-700 cursor-pointer text-white px-4 py-1.5 font-semibold rounded-xl"
        >
          Register
        </button>
        <div style={{ display: data.mobile ? "flex" : "none" }}
          className="ml-4 duration-300 ease-in-out cursor-pointer animate-fade-in transition-all active:scale-95"
          onClick={()=>{
            showNav? setShowNav(false) : setShowNav(true);
          }}>
            {/* <MenuIcon></MenuIcon> */}
            {showNav? <X className="animate-fade-in transition-all"></X> : <MenuIcon className="animate-fade-in transition-all"></MenuIcon>}
        </div>
      </div>
      <div style={{display: showNav? "flex" : "none"}} className="menu z-10 flex flex-col items-start justify-center p-2 bg-white absolute right-4 top-14.5 gap-2 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] ">
        <h4 className="hover:bg-secondary-100 w-full text-left rounded-lg p-1 cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2">
          {" "}
          <HomeIcon size={20}></HomeIcon> Home
        </h4>
        <h4 className="hover:bg-secondary-100 w-full text-left rounded-lg p-1 cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2">
          <DollarSign size={20}></DollarSign>
          Pricing
        </h4>
        <h4 className="hover:bg-secondary-100 w-full text-left rounded-lg p-1 cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2">
          <Phone size={20}></Phone>
          Contact
        </h4>
      </div>
      
    </header>
  );
};

export default Header;
