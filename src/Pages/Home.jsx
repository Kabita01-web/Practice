import React from 'react'




function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center" >
        <div className="bg-white p-10  rounded-2xl shadow-2xcd w-200 h-130 sm:w-110  min-h-80">
            <h2 className="text-2xl font-bold  justify-center items-center text-center mb-0.5 ">Welcome Back!</h2>
            <p className="text-gray-400 font-normal mb-5 text-center ">We missed you! Please enter your details.</p>
            <form className="space-y-5">
                <div>
                    <label htmlFor="email" className='font-semibold'>Email</label><br />
                    <input type="text" id="email" name="email" placeholder="Enter your email" className='border border-gray-300 p-2 rounded w-full placeholder:text-gray-300' required />
                </div>
                <div>
                    <label htmlFor="password" className='font-semibold'>Password</label><br />
                    <input type="password" id="password" name="password" placeholder="Enter your password" className='border border-gray-300 p-2 rounded w-full placeholder:text-gray-300' required />
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember" className='text-gray-300'>Remember Me</label>
                    <a href="#" className='text-blue-500 font-semibold pl-21'>Forgot Password?</a><br />
                </div>
                <button className=' w-full bg-blue-500 font-semibold rounded max-w-full text-white p-2 hover:bg-blue-600 text-center justify-center items-center'>Sign in</button><br />
                <button className=' w-full white font-semibold rounded max-w-full text-black p-2 hover:bg-blue-500 text-center justify-center items-center border-1 border-amber-100 '>Sign in with Google</button>
                <p className='text-gray-400 text-center'>Don't have an account? <a href="#" className='text-blue-400 font-semibold'>Sign up</a></p>
            </form>
        </div>
    </div>
        
  )
}

export default Home