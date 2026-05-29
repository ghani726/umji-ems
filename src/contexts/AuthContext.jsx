import { useState } from "react";
import Auth from "./Auth";

const data = "hello from context";

const AuthContext = ({ children }) => {
  // eslint-disable-next-line no-useless-escape
  const userNameReg = /^(?!.*\.\.)(?!.*\_\_)[a-z0-9._]{4,16}$/i;
  const passwordReg = /^[a-zA-Z0-9_\-.@!#$]{4,16}$/;


  //Login

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const [isAdmin, setIsAdmin] = useState(true);



  const [EmployeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    birthday: "",
    userName: "",
    password: "",
    companyID: "",
    department: "",
    position: "",
    experience: 0,
    salary: 0,
  })

  const [CompanyDetails, setCompanyDetails] = useState({
    name: "",
    companyID: "",
    adminName: "",
    email: "",
    username: "",
    foundingDate: 2026,
    password: "",
  })



  //Registration Page, 0 for Employee, 1 for Company.
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Auth.Provider
      value={{
        data,
        userName,
        setUserName,
        password,
        setPassword,
        passwordHidden,
        setPasswordHidden,
        userNameReg,
        passwordReg,
        isAdmin,
        setIsAdmin,
        activeTab,
        setActiveTab,
        EmployeeDetails,
        setEmployeeDetails,
        CompanyDetails,
        setCompanyDetails,

      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
