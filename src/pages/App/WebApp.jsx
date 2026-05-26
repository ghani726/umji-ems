import { Route, Routes } from "react-router-dom"
import Header from "../../Components/App/Header"
import Tasks from "./Tasks"
import Dashboard from "./Dashboard"
import Error from "../Website/Error"
import SideBar from "../../Components/App/SideBar"

const WebApp = () => {
  return (
    <>
        <Header></Header>
        <main className="flex bg-blue-800 w-full h-auto">
          <SideBar></SideBar>

          <section className="flex w-full h-full">
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