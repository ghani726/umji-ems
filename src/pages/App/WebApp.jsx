import { Route, Routes } from "react-router-dom"
import Header from "../../Components/App/Header"
import Tasks from "./Tasks"
import Dashboard from "./Dashboard"
import Error from "../Website/Error"
import SideBar from "../../Components/App/SideBar"
import { useState } from "react"



const WebApp = () => {
  const [hide, setHide] = useState(false)
  
  return (
    <>
        <Header hide={hide} setHide={setHide}></Header>
        <main className="flex w-full h-auto overflow-hidden">
          <SideBar hide={hide} setHide={setHide}></SideBar>

          <section className="flex w-full h-full overflow-hidden">
            <Routes>
              <Route path="" element={<Dashboard></Dashboard>}></Route>
              <Route path="/tasks" element={<Tasks></Tasks>}></Route>
              <Route path="*" element={<Error></Error>}></Route>
            </Routes>

          </section>
          
        </main>
        
        
    </>
  )
}

export default WebApp