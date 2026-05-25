
const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col justify-center items-center p-8 lg:p-24 md:p-16 lg:px-32 md:px-24 sm:px-16 gap-6">
        <div className="flex flex-col justify-center items-start sm:items-center md:items-center lg:items-center">
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">Manage Your Team</h2>
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-primary-700">Efficently & Seamlessly</h2>
        </div>
        <p className="text-secondary-700 text-left max-w-262.5 sm:text-center md:text-center lg:text-center xl:text-center">The all-in-one platform to streamline your processes, from payroll and attendance to leave management and announcements. Empower your workforce and simplify your administration.</p>
        <div className="flex justify-between items-center gap-4">
          <button className=" py-2 sm:py-4 px-4 sm:px-8 bg-primary-700 rounded-xl font-semibold text-white">Get Started</button>
          <button className=" py-2 sm:py-4 px-4 sm:px-8 bg-primary-200 rounded-xl font-semibold text-primary-700 ">Login</button>
        </div>
      </section>
    </main>
  )
}

export default Home