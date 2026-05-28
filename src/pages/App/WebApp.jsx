import { Route, Routes } from "react-router-dom"
import Header from "../../Components/App/Header"
import Tasks from "./Tasks"
import Dashboard from "./Dashboard"
import Error from "../Website/Error"
import SideBar from "../../Components/App/SideBar"
import { useState } from "react"
import NavBar from "../../Components/App/NavBar"


import { useContext } from "react";
import Data from "../../contexts/Data";


const WebApp = () => {
  const [hide, setHide] = useState(false)
  
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
    <>
        <Header hide={hide} setHide={setHide}></Header>
        <main className={`flex ${data.mobile?"flex-col":"flex-row"} w-full h-auto overflow-hidden`}>
          <SideBar hide={hide} setHide={setHide}></SideBar>
          
          <section className="flex w-full h-full overflow-hidden">
            <Routes>
              <Route path="" element={<Dashboard></Dashboard>}></Route>
              <Route path="/tasks" element={<Tasks></Tasks>}></Route>
              <Route path="*" element={<Error></Error>}></Route>
            </Routes>

          </section>
          <NavBar></NavBar>
        </main>
        
        
    </>
  )
}

export default WebApp