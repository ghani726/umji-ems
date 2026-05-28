import { Route, Routes } from "react-router-dom"
import Header from "../../Components/App/Header"
import Tasks from "./Tasks"
import Dashboard from "./Dashboard"
import Error from "../Website/Error"
import SideBar from "../../Components/App/SideBar"
import { useState } from "react"
import NavBar from "../../Components/App/NavBar"





const WebApp = () => {
  const [hide, setHide] = useState(false)

  return (
    <>
        <Header hide={hide} setHide={setHide}></Header>
        <main className={`flex flex-col md:flex-row w-full h-auto overflow-hidden`}>
          <SideBar hide={hide} setHide={setHide} className={`transition-all duration-300 ease-in-out`}></SideBar>
          
          <section className={`flex flex-col gap-4 p-6 px-8 h-[calc(100dvh-7.5rem)] md:h-[calc(100dvh-3.5rem)] overflow-y-auto w-full`}>
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