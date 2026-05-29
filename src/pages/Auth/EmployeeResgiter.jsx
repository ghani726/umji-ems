import { ArrowRight, BriefcaseBusiness, Eye, EyeOff, UserRound } from 'lucide-react';
import { useState } from 'react'




const PersonalDetails = ({data}) => {

    const today = new Date().toISOString().split('T')[0];

    const [date, setDate] = useState(today);

    return (
        <>
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
                    type="date"
                    value={date}
                    className="outline-none"
                    placeholder=" "
                    onChange={(e) => setDate(e.target.value)}
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
                <label htmlFor="userName">Username</label>
            </div>
            <div className="input-box-p text-lg bg-gray-100 rounded-2xl px-4">
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
            <div className="input-box-p text-lg bg-gray-100 rounded-2xl px-4">
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
        </>
    )
}

const ProffesionalDetails = ({data}) => {
    return (
        <>
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
        </>
    )
}


const EmployeeRegister = ({data}) =>{

    const [step, setStep] = useState(0)

    return (
        <>
        <div className="flex flex-col gap-6 w-full">
                <div className='flex justify-between items-center gap-2'>
                    <div className={`flex flex-col min-w-14 justify-center items-center shrink-0 text-primary-600`}>
                        <div className={`h-10 w-10 rounded-full flex justify-center items-center bg-primary-600 text-white`}>
                            <UserRound></UserRound>
                        </div>
                        <p className='text-xs'>Personal Details</p>
                    </div>
                    <div className={`w-[calc(100%-120px)] z-30 rounded-full flex-1 h-1 ${step>=1?"bg-primary-600":"bg-secondary-100"}`}></div>
                    <div className={`flex flex-col min-w-14 justify-center shrink-0 items-center ${step>=1?"text-primary-600":"text-secondary-600"}`}>
                        <div className={`h-10 w-10 rounded-full flex justify-center items-center ${step>=1?"bg-primary-600 text-white":"bg-secondary-100"}`}>
                            <BriefcaseBusiness></BriefcaseBusiness>
                        </div>
                        <p className='text-xs'>Professional Details</p>
                    </div>
                </div>
                {/* <PersonalDetails data={data}></PersonalDetails> */}
                <hr className='h-px rounded-full bg-secondary-300 w-full outline-none border-none' />
                <div className='flex justify-between items-center'>
                    <button disabled={step?false:true} className={`py-2 sm:py-3 px-4 sm:px-6 bg-secondary-100 hover:bg-secondary-200 rounded-xl text-black cursor-pointer disabled:cursor-not-allowed disabled:text-secondary-500`}>Back</button>
                    <button className={`py-2 sm:py-3 px-4 sm:px-6 bg-primary-600 hover:bg-primary-700 rounded-xl text-white flex gap-1 cursor-pointer`}>Next <ArrowRight /></button>
                </div>
            </div>
        </>
    )
}

export default EmployeeRegister