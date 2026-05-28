import { useState } from "react"
import { Eye, EyeOff } from "lucide-react";
import { useContext } from "react";
import Auth from "../contexts/Auth";
import toast from "react-hot-toast";





const EmployeeRegister = ({data}) =>{
    return (
        <>
            <div className="inputFeilds w-full grid grid-cols-[repeat(auto-fit,minmax(max(250px,calc(50%-1rem)),1fr))] gap-6">
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Company ID</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Full Name</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Email</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Username</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="date"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Birthday</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Position (Web Developer, etc)</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="number"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Experience (Years)</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="number"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Salary</label>
                </div>
                <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
                    <input
                        type={data.passwordHidden? "password": "text"}
                        className="outline-none"
                        placeholder=" "
                        value={data.password}
                        onChange={(e) => {
                        data.setPassword(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Password</label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={()=>{
                        data.passwordHidden? data.setPasswordHidden(false): data.setPasswordHidden(true);
                    }}>
                        {data.passwordHidden? <Eye/> : <EyeOff/>}
                    </div>
                </div>
                <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
                    <input
                        type={data.passwordHidden? "password": "text"}
                        className="outline-none"
                        placeholder=" "
                        value={data.password}
                        onChange={(e) => {
                        data.setPassword(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Confirm Password</label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={()=>{
                        data.passwordHidden? data.setPasswordHidden(false): data.setPasswordHidden(true);
                    }}>
                        {data.passwordHidden? <Eye/> : <EyeOff/>}
                    </div>
                </div>
            </div>
        </>
    )
}

const CompanyRegister = ({data}) =>{
    return (
        <>
            <div className="inputFeilds w-full grid grid-cols-[repeat(auto-fit,minmax(max(250px,calc(50%-1rem)),1fr))] gap-6">
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Company Name</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Company ID</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Admin Full Name</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Email (Admin)</label>
                </div>
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="text"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Admin Username</label>
                </div>
    
              
                <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                    <input
                        type="number"
                        className="outline-none"
                        placeholder=" "
                        value={data.userName}
                        onChange={(e) => {
                        data.setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Founding Date (Company)</label>
                </div>
                <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
                    <input
                        type={data.passwordHidden? "password": "text"}
                        className="outline-none"
                        placeholder=" "
                        value={data.password}
                        onChange={(e) => {
                        data.setPassword(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Password</label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={()=>{
                        data.passwordHidden? data.setPasswordHidden(false): data.setPasswordHidden(true);
                    }}>
                        {data.passwordHidden? <Eye/> : <EyeOff/>}
                    </div>
                </div>
                <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
                    <input
                        type={data.passwordHidden? "password": "text"}
                        className="outline-none"
                        placeholder=" "
                        value={data.password}
                        onChange={(e) => {
                        data.setPassword(e.target.value);
                        }}
                    />
                    <label htmlFor="userName">Confirm Password</label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={()=>{
                        data.passwordHidden? data.setPasswordHidden(false): data.setPasswordHidden(true);
                    }}>
                        {data.passwordHidden? <Eye/> : <EyeOff/>}
                    </div>
                </div>
            </div>
        </>
    )
}



const RegisterPage = () => {
    const data = useContext(Auth);
    // const [isEmployee, setIsEmployee] = useState(true)
    
    return (

    <div className={`bg-white transition-all duration-500 ease-in-out h-auto min-w-80 ms:min-w-md lg:w p-6 md:p-8 rounded-3xl absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-6 md:w-185 animate-fade-in`}>
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl font-bold text-primary-700">UMJI EMS</h1>
            <h4 className="font-normal text-sm text-secondary-600">
            Register new account as an Employee
            </h4>
        </div>

        <div className="typeSelector flex transition-all ease-in-out duration-300 justify-between items-center p-2 bg-secondary-100 rounded-2xl gap-2 relative">
            <div className="slider absolute top-1.5 bottom-1.5 left-1.5 w-25 bg-white rounded-xl shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
            style={{
          transform: `translateX(${data.activeTab * 105}%)`,
        }}></div>
            <div 
            onClick={()=>{
                // isEmployee?setIsEmployee(false):setIsEmployee(true)
                data.setActiveTab(0)
            }} className={`z-10 rounded-xl  p-2.5 px-4 text-secondary-800 font-semibold text-sm cursor-pointer active:scale-95 animate-fade-in transition-all ease-in-out duration-300`}>Employee</div>
            <div 
            onClick={()=>{
                // isEmployee?setIsEmployee(false):setIsEmployee(true)
                data.setActiveTab(1)
            }} className= {`z-10 rounded-xl p-2.5 px-4 text-secondary-800 font-semibold text-sm cursor-pointer active:scale-95 animate-fade-in transition-all ease-in-out duration-300`}>Company</div>
        </div>

        {data.activeTab?<CompanyRegister data={data}></CompanyRegister>:<EmployeeRegister data={data}></EmployeeRegister>}
        
    </div>
  )
}

export default RegisterPage