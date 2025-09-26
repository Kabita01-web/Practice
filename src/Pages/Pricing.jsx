import React from 'react'

function Pricing() {
  return (
    <div  className='flex min-h-screen bg-gray-200 '>
        <div className=' flex  gap-1 w-[800px] h-[400px] p-3 justify-center items-center m-auto  rounded-2xl  border-8 border-white backdrop-blur-lg  bg-white/30 '>
       <div className='p-6 w-60'> 
        <h1 className='text-indigo-950 font-semibold text-2xl'>Free</h1>
        <h1 className='text-indigo-950 font-bold text-4xl'>$ 0</h1>
        <span className='text-indigo-950 font-medium'>Free for your whole team</span>
        <p className='text-indigo-950 font-semibold mt-3.5 m-auto '>For individual or teams looking to organize anything.</p>
        <button className='p-3 bg-purple-300 text-black font-semibold  text-center  rounded-2xl mt-5 hover:bg-purple-400'>Get started</button>
        </div>
 <div className='p-6 w-60'>
            <h1 className='text-indigo-950 font-semibold text-2xl'>Standard</h1>
            <h1 className='text-indigo-950 font-bold text-4xl'>$ 6</h1>
            <span className='text-indigo-950 font-medium'>Per user per month</span>
            <p className='text-indigo-950 font-semibold mt-3.5 m-auto '>For teams that need to manage more work.</p>
            <button className='p-3 bg-sky-200 text-black font-semibold  text-center  rounded-2xl mt-5 hover:bg-sky-400'> Upgrade Now</button>
        </div>
        <div className=' p-6 w-60'>
            <h1  className='text-indigo-950 font-semibold text-2xl'>Preminum</h1>
            <h1 className='text-indigo-950 font-bold text-4xl'>$ 12</h1>
            <span  className='text-indigo-950 font-medium'>Per user per month</span>
            <p className='text-indigo-950 font-semibold mt-3.5 m-auto '>Best for teams that need to track multiple projects.</p>
            <button className='p-3 bg-orange-200 text-black font-semibold  text-center  rounded-2xl mt-5 hover:bg-orange-400'>Try for free</button>
        </div>
        </div>
    </div>
  )
}

export default Pricing