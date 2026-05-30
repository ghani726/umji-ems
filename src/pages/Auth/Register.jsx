import { useState, useContext } from "react";
import Auth from "../../contexts/Auth";
import EmployeeRegister from "./EmployeeResgiter";
import CompanyRegister from "./CompanyRegister";
import Data from "../../contexts/Data";

const RegisterPage = () => {
  const data = useContext(Auth);

  const dataBase = useContext(Data);

  // Employee Details

  const [nameE, setNameE] = useState("");
  const [emailE, setEmailE] = useState("");
  const [birthdayE, setBirthdayE] = useState("");
  const [userNameE, setUserNameE] = useState("");
  const [passwordE, setPasswordE] = useState("");
  const [confirmPasswordE, setConfirmPasswordE] = useState("");
  const [companyIDE, setCompanyIDE] = useState("");
  const [departmentE, setdepartmentE] = useState("");
  const [positionE, setPositionE] = useState("");
  const [experienceE, setsxperienceE] = useState("");
  const [salaryE, setSalaryE] = useState(0);
  const [successOfRegistrationAsEmployee, setSuccessOfRegistrationAsEmployee] =
    useState(false);

  // Company Details

  const [nameC, setNameC] = useState("");
  const [companyID, setCompanyID] = useState("");
  const [adminNameC, setAdminNameC] = useState("");
  const [emailC, setEmailC] = useState("");
  const [usernameC, setusernameC] = useState("");
  const [foundingDateC, setFoundingDateC] = useState(2026);
  const [passwordC, setPasswordC] = useState("");
  const [confirmPasswordC, setConfirmPasswordC] = useState("");
  const [successOfRegistrationAsCompany, setSuccessOfRegistrationAsCompany] =
    useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary-100 p-4 animate-fadeIn">
      <div
        className={`bg-white transition-all duration-500 ease-in-out h-auto min-w-92 ms:min-w-md lg:w p-6 md:p-8 rounded-3xl flex flex-col justify-center items-center gap-6 md:w-185 animate-fade-in`}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[28px] sm:text-3xl font-bold text-primary-700 text-center">
            Welcome to UMJI EMS
          </h1>
          <h4 className="font-normal text-sm text-secondary-600">
            {data.activeTab
              ? "Register a new Company"
              : "Register a new account as an Employee"}
          </h4>
        </div>

        <div className="typeSelector flex transition-all ease-in-out duration-300 justify-between items-center p-2 bg-secondary-100 rounded-2xl gap-2 relative">
          <div
            className="slider absolute top-1.5 bottom-1.5 left-1.5 w-25 bg-white rounded-xl shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none"
            style={{
              transform: `translateX(${data.activeTab * 105}%)`,
            }}
          ></div>
          <div
            onClick={() => {
              // isEmployee?setIsEmployee(false):setIsEmployee(true)
              data.setActiveTab(0);
            }}
            className={`z-10 rounded-xl  p-2.5 px-4 text-secondary-800 font-semibold text-sm cursor-pointer active:scale-95 animate-fade-in transition-all ease-in-out duration-300`}
          >
            Employee
          </div>
          <div
            onClick={() => {
              // isEmployee?setIsEmployee(false):setIsEmployee(true)
              data.setActiveTab(1);
            }}
            className={`z-10 rounded-xl p-2.5 px-4 text-secondary-800 font-semibold text-sm cursor-pointer active:scale-95 animate-fade-in transition-all ease-in-out duration-300`}
          >
            Company
          </div>
        </div>

        {data.activeTab ? (
          <CompanyRegister
            data={data}
            nameC={nameC}
            setNameC={setNameC}
            companyID={companyID}
            setCompanyID={setCompanyID}
            adminNameC={adminNameC}
            setAdminNameC={setAdminNameC}
            emailC={emailC}
            setEmailC={setEmailC}
            usernameC={usernameC}
            setusernameC={setusernameC}
            foundingDateC={foundingDateC}
            setFoundingDateC={setFoundingDateC}
            passwordC={passwordC}
            setPasswordC={setPasswordC}
            confirmPasswordC={confirmPasswordC}
            setConfirmPasswordC={setConfirmPasswordC}
            successOfRegistrationAsCompany={successOfRegistrationAsCompany}
            setSuccessOfRegistrationAsCompany={setSuccessOfRegistrationAsCompany}
          ></CompanyRegister>
        ) : (
          <EmployeeRegister
            data={data}
            nameE={nameE}
            setNameE={setNameE}
            emailE={emailE}
            setEmailE={setEmailE}
            birthdayE={birthdayE}
            setBirthdayE={setBirthdayE}
            userNameE={userNameE}
            setUserNameE={setUserNameE}
            passwordE={passwordE}
            setPasswordE={setPasswordE}
            confirmPasswordE={confirmPasswordE}
            setConfirmPasswordE={setConfirmPasswordE}
            companyIDE={companyIDE}
            setCompanyIDE={setCompanyIDE}
            departmentE={departmentE}
            setdepartmentE={setdepartmentE}
            positionE={positionE}
            setPositionE={setPositionE}
            experienceE={experienceE}
            setsxperienceE={setsxperienceE}
            salaryE={salaryE}
            setSalaryE={setSalaryE}
            successOfRegistrationAsEmployee={successOfRegistrationAsEmployee}
            setSuccessOfRegistrationAsEmployee={setSuccessOfRegistrationAsEmployee}
          ></EmployeeRegister>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
