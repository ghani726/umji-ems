import { useState } from "react";

const Header = () => {


    const [mobile, setMobile] = useState(false)
    window.addEventListener("resize", (e)=>{
        if(window.innerWidth <=500){
            console.log("Mobile");
            console.log(window.innerWidth);
            
        }
    })
  return (
    <header className="flex justify-between items-center h-14 w-full bg-white px-8">
        <h1 className="text-2xl font-bold">UMJI EMS</h1>
        <nav className="flex justify-between items-center gap-8">
            <h4>Home</h4>
            <h4>Pricing</h4>
            <h4>Contact</h4>
        </nav>
        <div className="flex justify-between items-center gap-2">
            <button className=" px-4 py-1.5 font-semibold rounded-xl">Login</button>
            <button className="bg-black text-white px-4 py-1.5 font-semibold rounded-xl">Resgister</button>
        </div>
    </header>
  )
}

export default Header