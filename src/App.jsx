import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Main from "./pages/Website/Main";
import WebApp from "./pages/App/WebApp";
const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Main></Main>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/app/*" element={<WebApp></WebApp>}></Route>
    </Routes>
  );
};

export default App;
