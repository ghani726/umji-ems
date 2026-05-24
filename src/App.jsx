import { useContext } from "react"
import { Auth } from "./contexts/AuthContext";
import LoginPage from "./pages/login";

const App = () => {

  const newData = useContext(Auth)

  console.log(newData);
  
  return (
    <LoginPage></LoginPage>
  )
}

export default App