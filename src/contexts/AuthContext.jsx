import { useState } from "react";
import Auth from "./Auth";

const data = "hello from context";

const AuthContext = ({ children }) => {
  // eslint-disable-next-line no-useless-escape
  const userNameReg = /^(?!.*\.\.)(?!.*\_\_)[a-z0-9._]{4,16}$/i;
  const passwordReg = /^[a-zA-Z0-9_\-.@!#$]{4,16}$/;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <Auth.Provider
      value={{
        data,
        userName,
        setUserName,
        password,
        setPassword,
        passwordHidden,
        setPasswordHidden,
        userNameReg,
        passwordReg,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
