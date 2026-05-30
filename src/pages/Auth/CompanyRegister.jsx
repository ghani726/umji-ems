import { ArrowRight, Building2, Eye, EyeOff, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CompanyDetails = (props) => {
    //Regexes

    const companyName = /^.{4,30}$/s; 
    const companyIDReg = /^(?!.*\.\.)(?!.*\_\_)[a-z0-9._]{4,16}$/i; //eslint-disable-line
    const foundDate = /^[0-9]+$/;
    

    const checkValues = () => {
        let isValid = true;

        if (!companyName.test(props.nameC)) {
            toast.error("Company name must be between 4 and 30 characters long.");
            isValid = false;
        }
        else if (!companyIDReg.test(props.companyID)) {
            toast.error(
                <div>
                    Company ID rules:
                    <ul className="list-disc ml-4 mt-1">
                        <li>Must start with a letter</li>
                        <li>4 to 16 characters (letters, numbers, periods, underscores)</li>
                        <li>No consecutive periods (..) or underscores (__)</li>
                    </ul>
                </div>
            );
            isValid = false;
        } else if(!foundDate.test(props.foundingDateC)){
            toast.error("Please enter numbers only.");
            isValid = false;
        }

        if (isValid) {
            props.setStep(1);
        }
        props.setNext(false);
    }

    useEffect(() => {
        if (props.next) {
            toast.dismiss(); // Clears old toast notifications instantly
            checkValues();
        }
    }, [props.next]); //eslint-disable-line

    

    return (
        <>
            <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                <input
                    type="text"
                    className="outline-none"
                    placeholder=" "
                    value={props.nameC}
                    onChange={(e) => {
                        props.setNameC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Company Name</label>
            </div>
            <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                <input
                    type="text"
                    className="outline-none"
                    placeholder=" "
                    value={props.companyID}
                    onChange={(e) => {
                        props.setCompanyID(e.target.value);
                    }}
                />
                <label htmlFor="userName">Company ID</label>
            </div>
            <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                <input
                    type="number"
                    className="outline-none"
                    placeholder=" "
                    value={props.foundingDateC}
                    onChange={(e) => {
                        props.setFoundingDateC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Founding Date in Year (Company)</label>
            </div>
        </>
    )
}

const AdminDetails = (props) => {

    const adminName = /^.{4,30}$/s;  
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    const userNameReg = /^(?!.*\.\.)(?!.*\_\_)[a-z][a-z0-9._]{3,15}$/i; //eslint-disable-line
    const passwordReg = /^[a-zA-Z0-9_\-.@!#$]{4,16}$/; 

    const checkValues = () => {
        let isValid = true;
        if (!adminName.test(props.adminNameC)) {
            toast.error("Admin Name must be between 4 and 30 characters.");
            isValid = false;
        } else if (!props.usernameC) {
            toast.error(
            <div>
                Username rules:
                <ul className='list-disc ml-4 mt-1'>
                    <li>Must start with a letter</li>
                    <li>4 to 16 characters (lowercase letters, numbers, dots, underscores)</li>
                    <li>Cannot contain consecutive dots (..) or underscores (__)</li>
                </ul>
            </div>
            );
            isValid = false;
        } else if(!email.test(props.emailC)){
            toast.error("Please enter a valid email address.");
            isValid = false;
        } else if(!passwordReg.test(props.passwordC)){
            toast.error("Password must be 4 to 16 characters (letters, numbers, or _-.@!#$).");
            isValid = false;
        } else if (props.passwordC !== props.confirmPasswordC) {
            toast.error("Passwords don't match.");
            isValid = false;
        }

        if (isValid) {
            toast.success("Account created successfully.");
            props.navigate("/login", { replace: true });
        }
        props.setNext(false);
    }

    useEffect(() => {
        if (props.next) {
            toast.dismiss();
            checkValues();
        }
    }, [props.next]); //eslint-disable-line

    return (
        <>
            <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                <input
                    type="text"
                    className="outline-none"
                    placeholder=" "
                    value={props.adminNameC}
                    onChange={(e) => {
                        props.setAdminNameC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Admin Full Name</label>
            </div>
            <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                <input
                    type="text"
                    className="outline-none"
                    placeholder=" "
                    value={props.usernameC}
                    onChange={(e) => {
                        props.setusernameC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Admin Username</label>
            </div>
            <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
                <input
                    type="text"
                    className="outline-none"
                    placeholder=" "
                    value={props.emailC}
                    onChange={(e) => {
                        props.setEmailC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Email (Admin)</label>
            </div>
            <div className="input-box-p text-lg bg-gray-100 rounded-2xl px-4">
                <input
                    type={props.data.passwordHidden ? "password" : "text"}
                    className="outline-none"
                    placeholder=" "
                    value={props.passwordC}
                    onChange={(e) => {
                        props.setPasswordC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Password</label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={() => {
                    props.data.passwordHidden ? props.data.setPasswordHidden(false) :props.data.setPasswordHidden(true);
                }}>
                    {props.data.passwordHidden ? <Eye /> : <EyeOff />}
                </div>
            </div>
            <div className="input-box-p text-lg bg-gray-100 rounded-2xl px-4">
                <input
                    type={props.data.passwordHidden ? "password" : "text"}
                    className="outline-none"
                    placeholder=" "
                    value={props.confirmPasswordC}
                    onChange={(e) => {
                        props.setConfirmPasswordC(e.target.value);
                    }}
                />
                <label htmlFor="userName">Confirm Password</label>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={() => {
                    props.data.passwordHidden ? props.data.setPasswordHidden(false) : props.data.setPasswordHidden(true);
                }}>
                    {props.data.passwordHidden ? <Eye /> : <EyeOff />}
                </div>
            </div>
        </>
    )
}


const CompanyRegister = (props) =>{

    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const [next, setNext] = useState(false);

    return (
        <>
        <div className="flex flex-col gap-6 w-full">
                <div className='flex justify-between items-center gap-2'>
                    <div className={`flex flex-col min-w-14 justify-center items-center shrink-0 text-primary-600`}>
                        <div className={`h-10 w-10 rounded-full flex justify-center items-center bg-primary-600 text-white`}>
                            <Building2></Building2>
                        </div>
                        <p className='text-xs'>Company Details</p>
                    </div>
                    <div className={`w-[calc(100%-120px)] z-30 rounded-full flex-1 h-1 ${step>=1?"bg-primary-600":"bg-secondary-100"}`}></div>
                    <div className={`flex flex-col min-w-14 justify-center shrink-0 items-center ${step>=1?"text-primary-600":"text-secondary-600"}`}>
                        <div className={`h-10 w-10 rounded-full flex justify-center items-center ${step>=1?"bg-primary-600 text-white":"bg-secondary-100"}`}>
                            <UserRound></UserRound>
                        </div>
                        <p className='text-xs'>Admin Account</p>
                    </div>
                </div>
                {step ? <AdminDetails {...props} navigate={navigate} next={next} setNext={setNext} step={step} setStep={setStep} /> : <CompanyDetails {...props} next={next} setNext={setNext} step={step} setStep={setStep} />}
                <hr className='h-px rounded-full bg-secondary-300 w-full outline-none border-none' />
                <div className='flex justify-between items-center'>
                    <button onClick={()=>{
                        {step>0?setStep(step-1):""}
                    }} disabled={step?false:true} className={`py-2 sm:py-3 px-4 sm:px-6 bg-secondary-100 hover:bg-secondary-200 rounded-xl text-black cursor-pointer disabled:cursor-not-allowed disabled:text-secondary-500`}>Back</button>
                    <button onClick={()=>{
                        setNext(true)
                    }} className={`py-2 sm:py-3 px-4 sm:px-6 bg-primary-600 hover:bg-primary-700 rounded-xl text-white flex gap-1 cursor-pointer`}>{step===1?"Complete Setup":(<>Next <ArrowRight /></>)}</button>
                </div>
            </div>
        </>
    )
}

export default CompanyRegister