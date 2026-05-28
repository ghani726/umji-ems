import { CalendarOff, DollarSign, UsersRound, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col justify-center items-center p-8 lg:p-24 md:p-16 lg:px-32 md:px-24 sm:px-16 gap-6 border-b-secondary-300 border-b">
        <div className="flex flex-col justify-center items-center  sm:items-start md:items-center lg:items-center">
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">Manage Your Team</h2>
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-primary-700 text-center">Efficiently & Seamlessly</h2>
        </div>
        <p className="text-secondary-700  max-w-200 text-left xs:text-center">The all-in-one platform to streamline your processes, from payroll and attendance to leave management and announcements. Empower your workforce and simplify your administration.</p>
        <div className="flex justify-between sm:justify-start items-center gap-4">
          <Link to="/register" className=" py-2 sm:py-4 px-4 sm:px-8 bg-primary-700 rounded-xl font-semibold text-white">Get Started</Link>
          <Link to="/login" className=" py-2 sm:py-4 px-4 sm:px-8 bg-primary-200 rounded-xl font-semibold text-primary-700 ">Login</Link>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-8 md:p-12 lg:px-32 md:px-24 sm:px-16 gap-4">
        <h4 className="text-lg text-primary-700 font-semibold">Our Features</h4>
        <h3 className="lg:text-4xl md:text-5xl sm:text-4xl text-3xl text-center font-bold">A better way to manage your workforce</h3>
        <p className="text-secondary-700  max-w-125 text-left xs:text-center">Everything you need to run your HR operations smoothly and efficiently, all in one place.</p>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(max(300px,calc(50%-1rem)),1fr))] gap-4">
          <div className="feature flex justify-between items-center bg-white p-4 rounded-2xl gap-4">
            <div className="icon flex justify-center items-center bg-primary-600 p-2 text-white rounded-xl"><UsersRound></UsersRound></div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Employee Mangement</h4>
              <p className="text-secondary-700  max-w-200 text-left">Keep all employee records organized and accessible. Manage profiles, roles, and departments with ease.</p>
            </div>
          </div>
          <div className="feature flex justify-between items-center bg-white p-4 rounded-2xl gap-4">
            <div className="icon flex justify-center items-center bg-primary-600 p-2 text-white rounded-xl"><CalendarOff></CalendarOff></div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Leave Management</h4>
              <p className="text-secondary-700  max-w-200 text-left">Automate leave requests and approvals. Track leave balances and view team availability at a glance.</p>
            </div>
          </div>
          <div className="feature flex justify-between items-center bg-white p-4 rounded-2xl gap-4">
            <div className="icon flex justify-center items-center bg-primary-600 p-2 text-white rounded-xl"><DollarSign></DollarSign></div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Payroll Processing</h4>
              <p className="text-secondary-700  max-w-200 text-left">Simplify your payroll with automated calculations and easy payslip generation. Ensure timely and accurate payments.</p>
            </div>
          </div>
          <div className="feature flex justify-between items-center bg-white p-4 rounded-2xl gap-4">
            <div className="icon flex justify-center items-center bg-primary-600 p-2 text-white rounded-xl"><Clock></Clock></div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Attendance Tracking</h4>
              <p className="text-secondary-700  max-w-200 text-left">Monitor employee attendance with simple clock-in and clock-out functionality. Generate reports for payroll and analysis.</p>
            </div>
          </div>
        </section>
      </section>

    </main>
  )
}

export default Home