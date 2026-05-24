import { useContext } from "react"
import { Auth } from "./contexts/AuthContext";
import LoginPage from "./pages/login";
import Main from "./pages/Website/Main";

const App = () => {

  const newData = useContext(Auth)

  console.log(newData);
  
  return (
    <Main></Main>
  )
}

export default App