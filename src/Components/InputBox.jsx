
const InputBox = ({label, type}) => {
  return (
    <div className="input-box text-lg bg-gray-100 rounded-2xl px-4">
        <input type={type} id="userName" className="outline-none" placeholder=" "/>
        <label htmlFor="userName">{label}</label>
    </div>
  )
}

export default InputBox