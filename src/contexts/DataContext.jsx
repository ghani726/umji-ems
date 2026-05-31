import { useState } from "react";
import Data from "./Data";

class Company {
  constructor(
    name,
    companyID,
    adminName,
    email,
    username,
    foundingDate,
    password,
  ) {
    this.name = name;
    this.companyID = companyID;
    this.adminName = adminName;
    this.email = email;
    this.username = username;
    this.foundingDate = foundingDate;
    this.password = password;
    this.createdAt = new Date();
    this.employees = [];
    this.tasks = [];
  }
  addEmployee(
    obj
  ) {
    const employee = new Employee(
      obj.name,
      obj.email,
      obj.birthday,
      obj.userName,
      obj.password,
      obj.companyID,
      obj.department,
      obj.position,
      obj.experience,
      obj.salary,
    );
    this.employees.push(employee);
  }
  addTask(title, description, assignedTo, deadline) {
    const task = new Task(title, description, assignedTo, deadline);
    assignedTo.assignTask(task);
  }
}

class Employee {
  constructor(
    name,
    email,
    birthday,
    userName,
    password,
    companyID,
    department,
    position,
    experience,
    salary,
  ) {
    this.name = name;
    this.email = email;
    this.birthday = birthday;
    this.userName = userName;
    this.password = password;
    this.companyID = companyID;
    this.department = department;
    this.position = position;
    this.experience = experience;
    this.salary = salary;
    this.createdAt = new Date();
    this.tasks = [];
  }
  assignTask(task) {
    this.tasks.push(task);
  }
}

class Task {
  constructor(title, description, assignedTo, deadline) {
    this.title = title;
    this.description = description;
    // this.assignedTo = assignedTo;
    this.deadline = deadline;
    this.createdAt = new Date();
  }
}

const dbData = JSON.parse(localStorage.getItem("companies"))


const companyList = {
  companies: [...dbData.companies],
  addCompany(
    obj
  ) {
    const company = new Company(
      obj.name,
      obj.companyID,
      obj.adminName,
      obj.email,
      obj.username,
      obj.foundingDate,
      obj.password,
    );
    this.companies.push(company);
  },
};

console.log(dbData);

console.log(companyList);

localStorage.setItem("companies", JSON.stringify(companyList));


console.log(companyList);

const DataContext = ({ children }) => {
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
  });

  const [CompanyDetails, setCompanyDetails] = useState({
    name: "",
    companyID: "",
    adminName: "",
    email: "",
    username: "",
    foundingDate: 2026,
    password: "",
  });

  const [mobile, setMobile] = useState(false);

  const [successOfRegistrationAsEmployee, setSuccessOfRegistrationAsEmployee] =
    useState(false);
  const [successOfRegistrationAsCompany, setSuccessOfRegistrationAsCompany] =
    useState(false);



  if(successOfRegistrationAsEmployee){

    companyList.companies.map(elem=>{

      
      console.log(elem);
      
      if(elem.companyID===EmployeeDetails.companyID){
        elem.addEmployee(EmployeeDetails);
        localStorage.setItem("companies", JSON.stringify(companyList));
        console.log("Hello");
        console.log(companyList);
      }
    })

    // const employee = companyList.companies[0].addEmployee(EmployeeDetails);
  //   localStorage.setItem("companies", JSON.stringify(companyList));
  //   console.log("Hello");
  //   console.log(companyList);
  }
  if(successOfRegistrationAsCompany){
    companyList.addCompany(CompanyDetails)
    localStorage.setItem("companies", JSON.stringify(companyList));
    console.log("Company Added");
    console.log(companyList);
  }

  return (
    <Data.Provider
      value={{
        mobile,
        setMobile,
        companyList,
        Task,
        Employee,
        Company,
        EmployeeDetails,
        setEmployeeDetails,
        CompanyDetails,
        setCompanyDetails,
        successOfRegistrationAsEmployee,
        setSuccessOfRegistrationAsEmployee,
        successOfRegistrationAsCompany,
        setSuccessOfRegistrationAsCompany,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;
