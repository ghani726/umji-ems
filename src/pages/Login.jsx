import { Eye } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="bg-white h-auto min-w-96 px-4 py-6 rounded-4xl absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold">UMJI EMS</h1>
      <h4 className="font-normal text-sm">Login into your account</h4>

      <div className="inputFeilds w-full flex flex-col gap-4">
        <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
          <input type="text" className="outline-none" placeholder=" "/>
          <label htmlFor="userName">Username</label>
        </div>
        <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
          <input type="password" className="outline-none" placeholder=" "/>
          <label htmlFor="userName">Password</label>
          <Eye className='absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400 bg-blue-600'></Eye>
        </div>
      </div>

    </div>
  )
}

export default LoginPage