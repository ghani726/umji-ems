import { useContext, useState } from "react";
import { DollarSign, HomeIcon, MenuIcon, Phone, X } from "lucide-react";
import Data from "../../contexts/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useContext(Data);

  //The minimum size, just to hide the buttons (Login, Register)

  const [min, setMin] = useState(false);

  //The small modal, to sow nav when on small screen
  const [showNav, setShowNav] = useState(false);

  //Responsive Ness of Header
  const displayCheck = () => {
    if (window.innerWidth <= 620) {
      data.setMobile(true);
    } else if (window.innerWidth > 620) {
      data.setMobile(false);
      setShowNav(false)
    }
    if (window.innerWidth <= 420) {
      setMin(true);
    } else if (window.innerWidth > 420) {
      setMin(false);
    }
  };

  //On page resize (Responsiveness)
  window.addEventListener("resize", displayCheck);

  //On page reload (Responsiveness)
  window.addEventListener("load", displayCheck);

  return (
    <header className="flex justify-between items-center h-14 w-full bg-white px-8 duration-300 ease-in-out transition-all">
      {/* Main Heading */}
      <h1 className="text-2xl cursor-pointer font-bold text-primary-700">
        UMJI EMS
      </h1>
      {/* Navbar (Desktop) */}
      <nav
        style={{ display: data.mobile ? "none" : "flex" }}
        className="flex justify-between items-center gap-8 duration-300 ease-in-out transition-all"
      >
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        <Link to="/pricing" className="cursor-pointer">
          Pricing
        </Link>
        <Link to="/contact" className="cursor-pointer">
          Contact
        </Link>
      </nav>
      {/* Buttons */}
      <div className="flex justify-between items-center gap-2">
        <button
          style={{ display: min ? "none" : "flex" }}
          className=" px-4 py-1.5 cursor-pointer rounded-xl"
        >
          <Link to="/login">Login</Link>
        </button>
        <button
          style={{ display: min ? "none" : "flex" }}
          className="bg-primary-600 hover:bg-primary-700 cursor-pointer text-white px-4 py-1.5 rounded-xl"
        >
          <Link to="/register">Register</Link>
        </button>

        {/* Menu, Mobile Screen */}
        <div
          style={{ display: data.mobile ? "flex" : "none" }}
          className="ml-4 duration-300 ease-in-out cursor-pointer animate-fade-in transition-all active:scale-95"
          onClick={() => {
            showNav ? setShowNav(false) : setShowNav(true);
            // data.mobile?setShowNav(true):setShowNav(false);
          }}
        >
          {showNav ? (
            <X className="animate-fade-in transition-all"></X>
          ) : (
            <MenuIcon className="animate-fade-in transition-all"></MenuIcon>
          )}
        </div>
      </div>
      {/* The mobile nav modal */}
      <div
        style={{ display: showNav&&data.mobile ? "flex" : "none" }}
        className="menu z-10 flex flex-col items-start justify-center p-2 bg-white absolute right-4 top-14.5 gap-2 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.3)] "
      >
        <Link
          to="/"
          onClick={()=>{
            setShowNav(false)
          }}
          className="hover:bg-secondary-100 w-full text-left rounded-lg p-1 cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2"
        >
          {" "}
          <HomeIcon size={20}></HomeIcon> Home
        </Link>
        <Link
          to="/pricing"
          onClick={()=>{
            setShowNav(false)
          }}
          className="hover:bg-secondary-100 w-full text-left rounded-lg p-1 cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2"
        >
          <DollarSign size={20}></DollarSign>
          Pricing
        </Link>
        <Link
          to="/contact"
          onClick={()=>{
            setShowNav(false)
          }}
          className="hover:bg-secondary-100 w-full text-left rounded-lg p-1 cursor-pointer duration-300 ease-in-out transition-all text-secondary-600 flex items-center gap-2"
        >
          <Phone size={20}></Phone>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
