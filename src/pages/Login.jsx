import InputBox from "../Components/InputBox"

const LoginPage = () => {
  return (
    <div className="bg-white h-auto min-w-96 px-4 py-6 rounded-4xl absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-2">
      <h1 className="text-4xl font-bold">UMJI EMS</h1>
      <h4 className="font-normal text-sm">Login into your account</h4>

      <div className="inputFeilds w-full flex flex-col gap-4">
        <InputBox label={"UserName"}></InputBox>
        <InputBox label={"Password"} type={"password"}></InputBox>

      </div>

    </div>
  )
}

export default LoginPage