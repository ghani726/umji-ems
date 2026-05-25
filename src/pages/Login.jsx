import { Eye, EyeOff } from "lucide-react";
import { useContext } from "react";
import Auth from "../contexts/Auth";
import toast from "react-hot-toast";

const LoginPage = () => {
  const data = useContext(Auth);

  const check = () =>{
    let a = null
    if(data.userNameReg.test(data.userName)){
      console.log("true");
    } else {
      toast.error("Username must be 4 to 16 characters long using letters, numbers, underscores, or periods. Consecutive periods (..) or underscores (__) are not allowed.", {
        iconTheme: {
          primary: '#ef4444',
          secondary: '#FFFAEE',
        },
      });
      console.log("he");
    }
    if(data.passwordReg.test(data.password)){
      console.log("true");
    } else {
      toast.error("Password must be 4 to 16 characters long and can only include letters, numbers, and basic symbols (_ - . @ ! # $).", {
        iconTheme: {
          primary: '#ef4444',
          secondary: '#FFFAEE',
        },
      });
      console.log("he");
    }
  }
  
  return (
    <div className="bg-white h-auto min-w-96 p-8 rounded-3xl absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-bold text-primary-700">UMJI EMS</h1>
        <h4 className="font-normal text-sm text-secondary-600">
          Login into your account
        </h4>
      </div>

      <div className="inputFeilds w-full flex flex-col gap-6">
        <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
          <input
            type="text"
            className="outline-none"
            placeholder=" "
            value={data.userName}
            onChange={(e) => {
              data.setUserName(e.target.value);
            }}
          />
          <label htmlFor="userName">Username</label>
        </div>
        <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
          <input
            type={data.passwordHidden? "password": "text"}
            className="outline-none"
            placeholder=" "
            value={data.password}
            onChange={(e) => {
              data.setPassword(e.target.value);
            }}
          />
          <label htmlFor="userName">Password</label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400" onClick={()=>{
            data.passwordHidden? data.setPasswordHidden(false): data.setPasswordHidden(true);
          }}>
            {data.passwordHidden? <Eye/> : <EyeOff/>}
          </div>
        </div>
        <div className="w-full text-right text-sm text-primary-700 font-semibold">
          Forgot Password?
        </div>
        <button onClick={check} className="p-3 text-center bg-primary-600 rounded-2xl active:scale-95 transition-all ease-in-out duration-300 text-white font-semibold">
          Sign In
        </button>
        <div className="flex justify-center items-center text-sm text-secondary-600">
          <p>First time setup?</p>
          <pre> </pre>
          <strong className="text-primary-700 font-semibold">
            Register New Account
          </strong>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
