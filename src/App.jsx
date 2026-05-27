
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import Main from "./pages/Website/Main";
import WebApp from "./pages/App/WebApp";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const App = () => {
  


  const location = useLocation();

  useEffect(() => {
    // This code runs every time the URL changes
    console.log('Current Path:', location.pathname);
    
    // Example: Send data to an analytics service
    // myAnalytics.trackPageView(location.pathname);
  }, [location]); // Dependency array tracks the location object


  return (
    <Routes>
      <Route path="*" element={<Main></Main>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/app/*" element={<WebApp></WebApp>}></Route>
      
    </Routes>
  )
}

export default App