import { Building2, CalendarOff, ClipboardCheck, ClipboardList, DollarSign, Megaphone, UserCheck, UsersRound } from "lucide-react"

const Dashboard = () => {
  return (
    <section className="flex flex-col gap-4 p-6 px-8 h-[calc(100dvh-3.5rem)] overflow-y-auto w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-secondary-950">Welcome, Admin</h1>
        <p className="text-secondary-600">
          Here's what's happening with your team today.
        </p>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(max(200px,calc(25%-1rem)),1fr))] gap-4">
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <UsersRound></UsersRound>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Total Employees</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <CalendarOff></CalendarOff>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">On Leave Today</h4>
              <h4 className="font-bold text-3xl">0</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <Building2></Building2>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Total Departments</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <ClipboardCheck></ClipboardCheck>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Pending Approvals</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <UserCheck></UserCheck>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Present Today</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <Megaphone></Megaphone>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Announcements</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <ClipboardList></ClipboardList>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Approved Leave</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary-200 text-primary-700 flex justify-center items-center rounded-xl h-12 w-12 shrink-0">
              <DollarSign></DollarSign>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm">Pending Payrolls</h4>
              <h4 className="font-bold text-3xl">2</h4>
            </div>
          </div>
          <div className="py-1 px-2 text-secondary-600 bg-secondary-100 w-fit text-sm rounded-lg">View List</div>
        </div>
        
      </div>
    </section>
  )
}

export default Dashboard