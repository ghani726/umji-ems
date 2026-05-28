import { useContext } from "react";
import Auth from "../../contexts/Auth";
import Data from "../../contexts/Data";

const AdminTasks = ({data}) => {
  return (
    <section className={`flex flex-col gap-4 p-6 px-8 ${data.mobile?"h-[calc(100dvh-7.5rem)]":"h-[calc(100dvh-3.5rem)]"} overflow-y-auto w-full`}>
      Tasks, Admin
    </section>
  )
}
const EmployeeTasks = ({data}) => {
  return (
    <section className={`flex flex-col gap-4 p-6 px-8 ${data.mobile?"h-[calc(100dvh-7.5rem)]":"h-[calc(100dvh-3.5rem)]"} overflow-y-auto w-full`}>
      Tasks, Employee
    </section>
  )
}

const Tasks = () => {
  const auth = useContext(Auth);
  const data = useContext(Data)
  return (
    <>
      {auth.isAdmin ? (
        <AdminTasks data={data}></AdminTasks>
      ) : (
        <EmployeeTasks data={data}></EmployeeTasks>
      )}
    </>
  );
}

export default Tasks