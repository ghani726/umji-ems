import { useState } from "react"
import Auth from "./Auth"

const data = "hello from context"


const AuthContext = ({children}) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordHidden, setPasswordHidden] = useState(true)
  return (
    <Auth.Provider value={{data, userName, setUserName, password, setPassword, passwordHidden, setPasswordHidden}}>
        {children}
    </Auth.Provider>
    
  )
}

export default AuthContext