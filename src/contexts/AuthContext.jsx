import { createContext } from 'react'

export const Auth = createContext()

const data = "hello from context"
const AuthContext = ({children}) => {
  return (
    <Auth.Provider value={data}>
        {children}
    </Auth.Provider>
    
  )
}

export default AuthContext