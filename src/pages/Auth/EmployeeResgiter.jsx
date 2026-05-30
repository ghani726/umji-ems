import {
  ArrowRight,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  UserRound,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Auth from "../../contexts/Auth";
import Data from "../../contexts/Data";

const PersonalDetails = (props) => {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);

  const data = useContext(Auth);

  const dataBase = useContext(Data);

  //Regexes

  const fullName = /^.{4,30}$/s;
  const email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const userNameReg = /^(?!.*\.\.)(?!.*\_\_)[a-z][a-z0-9._]{3,15}$/i; //eslint-disable-line
  const passwordReg = /^[a-zA-Z0-9_\-.@!#$]{4,16}$/;

  const checkValues = () => {
    let isValid = true;

    if (!fullName.test(props.nameE)) {
      toast.error("Name must be between 4 and 30 characters long.");
      isValid = false;
    } else if (!email.test(props.emailE)) {
      toast.error("Please enter a valid email address.");
      isValid = false;
    } else if (!userNameReg.test(props.userNameE)) {
      toast.error(
        <div>
          Username rules:
          <ul className="list-disc ml-4 mt-1">
            <li>Must start with a letter</li>
            <li>4 to 16 characters (letters, numbers, periods, underscores)</li>
            <li>No consecutive periods (..) or underscores (__)</li>
          </ul>
        </div>,
      );
      isValid = false;
    } else if (!passwordReg.test(props.passwordE)) {
      toast.error(
        "Password must be 4 to 16 characters long and use valid symbols (_-.@!#$).",
      );
      isValid = false;
    } else if (props.passwordE !== props.confirmPasswordE) {
      toast.error("Passwords don't match.");
      isValid = false; 
    }

    return isValid;
  };

  const checkInDB = () => {
    let isValidInDB = true;

    //eslint-disable-next-line
    dataBase.companyList.companies.map((company, indexOfCompany) => {
      if (props.emailE === company.email) {
        toast.error("Account with this email already exists. Try logging in.");
        isValidInDB = false;
      } else if (props.userNameE === company.username) {
        toast.error("This username has already been taken by someone else.");
        isValidInDB = false;
      } else {
        //eslint-disable-next-line
        company.employees.map((employee, indexOfEmployee) => { 
          if (props.emailE === employee.email) {
            toast.error(
              "Account with this email already exists. Try logging in.",
            );
            isValidInDB = false;
          } else if (props.userNameE === employee.userName) {
            toast.error(
              "This username has already been taken by someone else.",
            );
            isValidInDB = false;
          }
        });
      }
    });

    return isValidInDB;
  };
  useEffect(() => {
    if (props.next) {
      toast.dismiss(); // Clears old toast notifications instantly
      if (checkInDB() && checkValues()) {
        props.setStep(1);
      }
      props.setNext(false);
    }
  }, [props.next]); // eslint-disable-line

  return (
    <>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="text"
          className="outline-none"
          placeholder=" "
          value={props.nameE}
          onChange={(e) => {
            props.setNameE(e.target.value);
          }}
        />
        <label htmlFor="userName">Full Name</label>
      </div>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="text"
          className="outline-none"
          placeholder=" "
          value={props.emailE.trim()}
          onChange={(e) => {
            props.setEmailE(e.target.value);
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
          onChange={(e) => {
            setDate(e.target.value);
            props.setBirthdayE(e.target.value);
          }}
        />
        <label htmlFor="userName">Birthday</label>
      </div>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="text"
          className="outline-none"
          placeholder=" "
          value={props.userNameE.trim()}
          onChange={(e) => {
            props.setUserNameE(e.target.value);
          }}
        />
        <label htmlFor="userName">Username</label>
      </div>
      <div className="input-box-p text-lg bg-gray-100 rounded-2xl px-4">
        <input
          type={data.passwordHidden ? "password" : "text"}
          className="outline-none"
          placeholder=" "
          value={props.passwordE}
          onChange={(e) => {
            props.setPasswordE(e.target.value);
          }}
        />
        <label htmlFor="userName">Password</label>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400"
          onClick={() => {
            data.passwordHidden
              ? data.setPasswordHidden(false)
              : data.setPasswordHidden(true);
          }}
        >
          {data.passwordHidden ? <Eye /> : <EyeOff />}
        </div>
      </div>
      <div className="input-box-p text-lg bg-gray-100 rounded-2xl px-4">
        <input
          type={data.passwordHidden ? "password" : "text"}
          className="outline-none"
          placeholder=" "
          value={props.confirmPasswordE}
          onChange={(e) => {
            props.setConfirmPasswordE(e.target.value);
          }}
        />
        <label htmlFor="userName">Confirm Password</label>
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400"
          onClick={() => {
            data.passwordHidden
              ? data.setPasswordHidden(false)
              : data.setPasswordHidden(true);
          }}
        >
          {data.passwordHidden ? <Eye /> : <EyeOff />}
        </div>
      </div>
    </>
  );
};

const ProffesionalDetails = (props) => {
  const companyIDReg = /^(?!.*\.\.)(?!.*\_\_)[a-z][a-z0-9._]{3,15}$/i; //eslint-disable-line
  const experienceNsalaryReg = /^[0-9]+$/; //eslint-disable-line


    const dataBase = useContext(Data);

  const checkValues = () => {

    // props.setsxperienceE(props.experienceE.trim())
    console.log(props.experienceE);
    console.log(props.experienceE.trim());
    
    
    let isValid = true;
    if (!companyIDReg.test(props.companyIDE)) {
      toast.error(
        <div>
          Company ID rules:
          <ul className="list-disc ml-4 mt-1">
            <li>Must start with a letter</li>
            <li>4 to 16 characters (letters, numbers, periods, underscores)</li>
            <li>No consecutive periods (..) or underscores (__)</li>
          </ul>
        </div>,
      );
      isValid = false;
    } else if (!props.departmentE) {
      toast.error("Please select a department.");
      isValid = false;
    } else if (!props.positionE) {
      toast.error(
        "Please write your position.(At which you are interested to work on).",
      );
      isValid = false;
    } else if (props.experienceE === "" ) {
      toast.error("Please write your experience. (You can also write 0)");
      isValid = false;
    } else if (!props.salaryE) {
      toast.error("Please write your salary.(WHich you expect)");
      isValid = false;
    }

    return isValid;
  };

  const checkInDB = () => {
    let isValidInDB = true;

    //eslint-disable-next-line
    dataBase.companyList.companies.map((company, indexOfCompany) => {
      if (props.companyIDE !== company.companyID) {
        toast.error("No Company exists with this id.");
        isValidInDB = false;
      } 
    });

    return isValidInDB;
  };

  useEffect(() => {
    if (props.next) {
      toast.dismiss(); // Clears old toast notifications instantly
      if (checkInDB() && checkValues()) {
        toast.success("Account created successfully.");
        props.navigate("/login", { replace: true });
      }
      props.setNext(false);
    }
  }, [props.next]); // eslint-disable-line

  return (
    <>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="text"
          className="outline-none"
          placeholder=" "
          value={props.companyIDE}
          onChange={(e) => {
            props.setCompanyIDE(e.target.value);
          }}
        />
        <label htmlFor="userName">Company ID</label>
      </div>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <select
          name="department"
          id="department"
          className="outline-none"
          value={props.departmentE}
          onChange={(e) => {
            props.setdepartmentE(e.target.value);
          }}
          required
        >
          <option value="" disabled defaultValue>
            Select your department
          </option>
          <option value="sales-development">Sales Development</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="marketing">Marketing</option>
          <option value="hr">HR</option>
        </select>
        <label htmlFor="userName">Department</label>
      </div>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="text"
          className="outline-none"
          placeholder=" "
          value={props.positionE}
          onChange={(e) => {
            props.setPositionE(e.target.value);
          }}
        />
        <label htmlFor="userName">Position (Web Developer, etc)</label>
      </div>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="number"
          className="outline-none"
          placeholder=" "
          value={props.experienceE}
          onChange={(e) => {
            props.setsxperienceE(e.target.value);
          }}
        />
        <label htmlFor="userName">Experience (Years)</label>
      </div>
      <div className="input-box text-lg w-full bg-gray-100 rounded-2xl px-4">
        <input
          type="number"
          className="outline-none"
          placeholder=" "
          value={props.salaryE}
          onChange={(e) => {
            props.setSalaryE(e.target.value);
          }}
        />
        <label htmlFor="userName">Salary</label>
      </div>
    </>
  );
};

const EmployeeRegister = (props) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [next, setNext] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-between items-center gap-2">
          <div
            className={`flex flex-col min-w-14 justify-center items-center shrink-0 text-primary-600`}
          >
            <div
              className={`h-10 w-10 rounded-full flex justify-center items-center bg-primary-600 text-white`}
            >
              <UserRound></UserRound>
            </div>
            <p className="text-xs">Personal Details</p>
          </div>
          <div
            className={`w-[calc(100%-120px)] z-30 rounded-full flex-1 h-1 ${step >= 1 ? "bg-primary-600" : "bg-secondary-100"}`}
          ></div>
          <div
            className={`flex flex-col min-w-14 justify-center shrink-0 items-center ${step >= 1 ? "text-primary-600" : "text-secondary-600"}`}
          >
            <div
              className={`h-10 w-10 rounded-full flex justify-center items-center ${step >= 1 ? "bg-primary-600 text-white" : "bg-secondary-100"}`}
            >
              <BriefcaseBusiness></BriefcaseBusiness>
            </div>
            <p className="text-xs">Professional Details</p>
          </div>
        </div>
        {step ? (
          <ProffesionalDetails
            {...props}
            navigate={navigate}
            next={next}
            setNext={setNext}
            step={step}
            setStep={setStep}
          />
        ) : (
          <PersonalDetails
            {...props}
            next={next}
            setNext={setNext}
            step={step}
            setStep={setStep}
          />
        )}
        <hr className="h-px rounded-full bg-secondary-300 w-full outline-none border-none" />
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              {
                step > 0 ? setStep(step - 1) : "";
              }
            }}
            disabled={step ? false : true}
            className={`py-2 sm:py-3 px-4 sm:px-6 bg-secondary-100 hover:bg-secondary-200 rounded-xl text-black cursor-pointer disabled:cursor-not-allowed disabled:text-secondary-500`}
          >
            Back
          </button>
          <button
            onClick={() => {
              setNext(true);
            }}
            className={`py-2 sm:py-3 px-4 sm:px-6 bg-primary-600 hover:bg-primary-700 rounded-xl text-white flex gap-1 cursor-pointer`}
          >
            {step === 1 ? (
              "Complete Setup"
            ) : (
              <>
                Next <ArrowRight />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default EmployeeRegister;
