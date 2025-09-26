import React from 'react'

function Login() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-50'>
        <div className=' bg-white m-auto p-10 rounded-md shadow-2xl h-[530px] w-[370px] '>
            <h1 className='font-bold text-indigo-950 text-center text-2xl p-2 mb-2  font-serif'> Log in</h1>
             <form className="space-y-2">
                <input type="email" name="email" id="email" placeholder='    Enter email'
                 className='border-2 rounded-md border-slate-200 w-70 py-2 ml-2 mr-2.5 bg-gray-100 hover:bg-gray-200 font-medium' />
                <input type="password" name="pw" id="pw" placeholder='   Enter password'
                 className='border-2 rounded-md border-slate-200 w-70 py-2  ml-2 bg-gray-100 hover:bg-gray-200 font-medium' />
                <input type="button" value="Login" 
                className=' w-70 mt-2 rounded-md bg-indigo-950 text-white ml-2 py-2 '/>
                <h1 className='text-gray-400 text-center mt-2.5 mb-5'>OR</h1>
             <a href="http://google.com"
                   className="flex items-center border-2 border-slate-200 px-4 py-2 ml-2 rounded-md bg-gray-100 hover:bg-gray-200 w-71">
                  <img 
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google logo"
                   className="w-5 h-5 mr-2"
                      />
                  <span className="text-gray-700 font-medium">Continue with Google</span>
             </a>
   
               <a href="http://microsoft.com"
   className="flex items-center border-2 border-slate-200 px-4 py-2 ml-2 rounded-md bg-gray-100 hover:bg-gray-200 w-71">
   <img 
     src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
     alt="Google logo"
     className="w-5 h-5 mr-2"
   />
   <span className="text-gray-700 font-medium">Continue with Google</span>
</a>
              <a href="http://apple.com"
   className="flex items-center border-2 border-slate-200 px-4 py-2 ml-2 rounded-md bg-gray-100 hover:bg-gray-200 w-71">
   <img 
     src="https://img.icons8.com/?size=100&id=17843&format=png&color=000000"
     alt="Google logo"
     className="w-5 h-5 mr-2"
   />
   <span className="text-gray-700 font-medium">Continue with Google</span>
</a>
                 <h1 className='font-medium text-sm text-center mt-4'> Can't Log in? <a href="http://">.Already have an account?</a></h1>
            </form>

        </div>
    </div>
  )
}

export default Login