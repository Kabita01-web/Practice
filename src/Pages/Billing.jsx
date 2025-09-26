import React from 'react'

function Billing() {
  return (
    
        <div className='flex min-h-screen bg-violet-100'>
          <div className='w-[1000px] h-[650px] m-auto bg-white shadow-2xl rounded-2xl flex '>
            <div className=' bg-violet-50 w-60 rounded-l-2xl'>
              <div className=' mt-10  p-3 items-center mb-12 flex'>
                <img src="https://tabler.io/_next/image?url=%2Favatars%2Fdefault%2F7c9062905b4ce3d276dfffd2b34bbb49.png&w=400&q=75"
                  alt="" 
                  className="w-12 h-12 rounded-2xl"/>
                  <div className="ml-2">
                    <h1 className=' font-bold text-indigo-950 ml-2'> Ildiko Gaspar</h1>
                    <h1 className='text-sm text-gray-400 ml-2'>@igaspar</h1>
                  </div>
               </div>
              <nav className="space-y-6 ml-10 text-gray-500 font-normal ">
            <a href='' className='mt-6 flex'>
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  fill="none"  stroke="currentColor"      class=""><path stroke="none" /><path d="M8 8h8v8h-8z" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /></svg>
              General</a>
             <a href='' className='mt-6 flex'> 
             <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"    fill="currentColor"  class=""><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3" /></svg>
           Password </a> 
           <a href='' className=' mt-6 flex'>
           
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" /><path d="M16 22l5 -5" /><path d="M21 21.5v-4.5h-4.5" /></svg>
           Invitations
           </a>
           <a href='' className=' mt-6 flex'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-invoice"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 7l1 0" /><path d="M9 13l6 0" /><path d="M13 17l2 0" /></svg> 
         Billing
           </a>
 <a href='' className='mt-6 flex'>
  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-apps"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M14 7l6 0" /><path d="M17 4l0 6" /></svg>
         Apps
           </a>
</nav>
</div>
<div className=' flex-col p-10'>
  <div>
  <h1 className=' font-bold text-indigo-950 text-2xl'>Billing</h1>
  <h1  className=' font-bold text-indigo-950 text-sm mt-15'>Order History</h1>
  <h1 className='  text-gray-500 text-sm mb-10'>Manage billing information and view receipts</h1>
</div>
<div className='p-1 ' >
  <table className='min-w-full  w-[450px] h-[200px]'>
    <tr className='' >
      <td className=' font-semibold text-gray-500 text-sm  '>Date</td>
     <td  className=' font-semibold text-gray-500 text-sm '>Type</td>
     <td  className=' font-semibold text-gray-500 text-sm '>Receipt</td>
    </tr>
    <tr className=' font-semibold text-indigo-950 text-sm hover:scale-110 hover:shadow-md hover:brightness-110'>
      <td>Oct 21,2021</td>
      <td>Pro Annual</td>
      <td><button className='border-1 text-center border-gray-200 py-1 px-5 rounded-md'>Download</button></td>
    </tr>
    <tr className=' font-semibold text-indigo-950 text-sm  hover:scale-110 hover:shadow-md hover:brightness-110'>
      <td>Aug 21,2021</td>
      <td>Pro Portfolio</td>
      <td><button className='border-1 text-center border-gray-200  py-1 px-5 rounded-md'>Download </button></td>
    </tr>
    <tr className=' font-semibold text-indigo-950 text-sm  hover:scale-110 hover:shadow-md hover:brightness-110 '>
      <td>July 21,2021</td>
      <td>Sponsered Post</td>
<td><button className='border-1 text-center border-gray-200  py-1 px-5 rounded-md'>Download </button></td>    </tr>
    <tr className=' font-semibold text-indigo-950 text-sm  hover:scale-110 hover:shadow-md hover:brightness-110"'>
      <td>Jun 21,2021</td>
      <td>Sponsored Post</td>
<td><button className='border-1 text-center border-gray-200  py-1 px-5 rounded-md'>Download </button></td>    </tr>
   
  </table>
  </div>
  <a href="http://">Load more</a>
<div>
  <h1  className=' font-bold text-indigo-950 text-sm mt-15'>Payment Method</h1>
  <h1 className=' font- text-gray-500 text-sm mb-0'>Manage billing information and view receipts</h1>
   <div className=' mt-10 items-center mb-12 flex'>
                <img src="https://img.icons8.com/?size=100&id=13608&format=png&color=000000"
                  alt="" 
                  className="w-12 h-12 rounded-2xl"/>
                  <div className="ml-2">
                    
    <h1  className='  text-indigo-950 text-sm '>Visa ending in 2255     <button className='border-1 text-center border-gray-200 ml-30 py-1 px-5 rounded-md font-semibold text-indigo-950 text-sm'>Remove </button>
</h1>
   
                  </div>
                  </div>
  
</div>
</div>
<div  className='mt-40 p-5 bg-orange-600  rounded-2xl w-49 text-white h-45'>
  <h1 className='  text-sm mb-4'>Your plan</h1>
  <h1 className='   text-2xl font-bold mb-4'>Pro Annual</h1>
  <h1 className='  text-sm '>Renews on Nov,2021</h1>
  <button className= 'border-1 text-center border-white py-1 mt-2 px-4 rounded-md   text-sm' >Cancel Subscription</button>
</div>
            </div>
          
          </div>
       
      
    
  )
}

export default Billing