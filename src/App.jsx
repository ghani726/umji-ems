
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import Main from "./pages/Website/Main";

const App = () => {
  
  return (
    <Routes>
      <Route path="*" element={<Main></Main>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )
}

export default App