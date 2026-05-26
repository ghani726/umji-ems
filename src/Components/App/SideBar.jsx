import { LayoutDashboard } from "lucide-react"

const SideBar = () => {
  return (
    <aside className="flex flex-col p-4 gap-4 min-w-55 h-dvh bg-white sticky left-0">
        <span className="p-2 flex justify-between items-center gap-2">
            <LayoutDashboard></LayoutDashboard>
            Dashboard
        </span>
        
    </aside>
  )
}

export default SideBar