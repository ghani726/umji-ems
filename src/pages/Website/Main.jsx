import { Route, Routes } from 'react-router-dom'
import Header from '../../Components/Web/Header'
import Home from './Home'
import Pricing from './Pricing'
import Error from './Error'
const Main = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="pricing" element={<Pricing></Pricing>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>

    </>
  )
}

export default Main