import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import Main from "./pages/Website/Main";
import WebApp from "./pages/App/WebApp";
import RegisterPage from "./pages/Auth/Register";
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Main></Main>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
      <Route path="/app/*" element={<WebApp></WebApp>}></Route>
    </Routes>
  );
};

export default App;
