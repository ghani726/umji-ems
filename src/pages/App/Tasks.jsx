import { useContext } from "react";
import Auth from "../../contexts/Auth";

const AdminTasks = () => {
  return (
    <>
      Tasks, Admin
    </>
  )
}
const EmployeeTasks = () => {
  return (
    <>
      Tasks, Employee
    </>
  )
}

const Tasks = () => {
  const auth = useContext(Auth);
  return (
    <>
      {auth.isAdmin ? (
        <AdminTasks></AdminTasks>
      ) : (
        <EmployeeTasks></EmployeeTasks>
      )}
    </>
  );
}

export default Tasks