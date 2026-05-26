import { Link } from "react-router-dom"

import logo from "../../../public/logo.png"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-white w-full p-12 px-4 sm:px-12 lg:px-32 xl:px-64">
        <section className="flex flex-col sm:flex-row items-center justify-between gap-8 lg:gap-24 lg:pr-16 w-full">
            <div className="flex flex-col items-center sm:items-start gap-4">
                <div className="flex items-center gap-2">
                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
                        <img src={logo} className="h-12 w-12" alt="UMJI EMS Logo" />
                    </div>
                    <h4 className="text-xl font-bold ">UMJI EMS</h4>
                </div>
                <p className="text-secondary-700 w-full items-center sm:items-start">The all-in-one platform for modern HR teams.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:items-start w-full gap-4">
                <div className="flex flex-col items-center sm:items-start">
                    <h4 className="text-lg font-bold ">Support</h4>
                    <div className="flex flex-col items-center sm:items-start" >
                        <Link className="cursor-pointer text-secondary-700">Pricing</Link>
                        <Link className="cursor-pointer text-secondary-700">Guides</Link>
                        <Link className="cursor-pointer text-secondary-700">Documentaion</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <h4 className="text-lg font-bold ">Company</h4>
                    <div className="flex flex-col items-center sm:items-start" >
                        <Link className="cursor-pointer text-secondary-700">About</Link>
                        <Link className="cursor-pointer text-secondary-700">Vision</Link>
                        <Link className="cursor-pointer text-secondary-700">Testimonials</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                    <h4 className="text-lg font-bold ">Legal</h4>
                    <div className="flex flex-col items-center sm:items-start">
                        <Link className="cursor-pointer text-secondary-700">Privacy</Link>
                        <Link className="cursor-pointer text-secondary-700">Terms</Link>
                        {/* <Link className="cursor-pointer text-secondary-700"></Link> */}
                    </div>
                </div>
            </div>
        </section>
        <hr className="my-8 bg-secondary-700 text-secondary-700 border-none h-0.5 rounded-4xl"/>
        <section className="flex justify-between items-center">
            <div>© 2026 UMJI EMS. All rights reserved.</div>
            <div>
                <FaGithub className="text-2xl cursor-pointer" onClick={()=>{
                    window.open("https://github.com/ghani726/umji-ems")
                }} />
            </div>
        </section>
    </footer>
  )
}

export default Footer