import { useContext } from "react";
import Auth from "../../contexts/Auth";

const AdminTasks = () => {
  return (
    <section className={`flex flex-col gap-4 p-6 px-8 h-[calc(100dvh-7.5rem)] md:h-[calc(100dvh-3.5rem)] overflow-y-auto w-full`}>
      Tasks, Admin
    </section>
  )
}
const EmployeeTasks = () => {
  return (
    <section className={`flex flex-col gap-4 p-6 px-8 h-[calc(100dvh-7.5rem)] md:h-[calc(100dvh-3.5rem)] overflow-y-auto w-full`}>
      Tasks, Employee
    </section>
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