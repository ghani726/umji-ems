import { useState } from "react";
import Data from "./Data";


class Company {
    constructor(name, companyID, adminName, email, username, foundingDate, password) {
        this.name = name;
        this.companyID = companyID;
        this.adminName = adminName;
        this.email = email;
        this.username = username;
        this.foundingDate = foundingDate;
        this.password = password;
        this.createdAt = new Date()
        this.employees = []
        this.tasks = []
    }
    addEmployee(name, email, birthday, userName, password, companyID, department){
      const employee = new Employee(name, email, birthday, userName, password, companyID, department)
      this.employees.push(employee)
    }
    addTask(title, description, assignedTo, deadline){
      const task = new Task(title, description, assignedTo, deadline)
      assignedTo.assignTask(task)
    }

}


class Employee {
  constructor(name, email, birthday, userName, password, companyID, department, position, experience, salary) {
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
    this.createdAt = new Date()
    this.tasks = []
  }
  assignTask(task){
    this.tasks.push(task)
  }
}

class Task {
  constructor(title, description, assignedTo, deadline) {
    this.title = title;
    this.description = description;
    // this.assignedTo = assignedTo;
    this.deadline = deadline;
    this.createdAt = new Date()
  }
}

const companyList = {
  companies: [],
  addCompany(name, companyID, adminName, email, username, foundingDate, password){
    const company = new Company(name, companyID, adminName, email, username, foundingDate, password)
    this.companies.push(company)
  }
}



const DataContext = ({ children }) => {
  const [mobile, setMobile] = useState(false);

  
  return (
    
    <Data.Provider value={{mobile, setMobile, companyList, Task, Employee, Company}}>
        {children}
    </Data.Provider>
  )
};

export default DataContext;
