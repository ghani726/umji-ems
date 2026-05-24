import { useContext } from "react"
import Auth from "./contexts/Auth";
import LoginPage from "./pages/Login";

const App = () => {

  const newData = useContext(Auth)

  console.log(newData);
  
  return (
    <LoginPage></LoginPage>
  )
}

export default App