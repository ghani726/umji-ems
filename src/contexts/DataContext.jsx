import { useState } from "react";
import Data from "./Data";

const DataContext = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  return (
    
    <Data.Provider value={{mobile, setMobile}}>
        {children}
    </Data.Provider>
  )
};

export default DataContext;
