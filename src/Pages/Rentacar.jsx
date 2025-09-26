import React from 'react'

function Rentacar() {
  return (
        <div className='flex flex-col min-h-screen p-4 bg-[url(/images/imagg.jpg)] bg-cover'>
        <div className=' m-auto p-10 w-[520px] rounded-2xl shadow-2xl justify-center items-center bg-white '>
            <h1 className='text-3xl text-indigo-950 font-semibold mb-6'>Search for a rental car</h1>
                         <div className="mb-4">
            <label htmlFor="location" className='text-indigo-950'>Pick up location</label><br/>
            <input type="Location"
             placeholder='City,airport, region, district...'
             className='border-1 border-gray-300 w-[400px] p-1.5 placeholder:text-indigo-950 placeholder:font-semibold mr-9 mb-3' />
            <input type="checkbox" name="deliver" id="deliver"/>
            <label htmlFor='text' className=' text-indigo-950 font-semibold'>Deliver the car somewhere else</label><br/>
               </div>
            <div className="flex gap-4 mb-6">
          {/* Pickup */}
          <div className="flex-1">
            <label
              htmlFor="pickup-date"
              className="block text-indigo-950 font-medium mb-2"
            >
               Date of pickup
            </label>
            <div className="space-y-2">
              <input
                type="date"
                id="pickup-date"
                className="w-full px-4 py-3 rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:outline-none transition-colors"
              />
              <input
                type="time"
                id="pickup-time"
                className="w-full px-4 py-3 rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Return */}
          <div className="flex-1">
            <label
              htmlFor="delivery-date"
              className="block text-indigo-950 font-medium mb-2"
            >
               Date of delivery
            </label>
            <div className="space-y-2">
              <input
                type="date"
                id="delivery-date"
                className="w-full px-4 py-3 rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:outline-none transition-colors"
              />
              <input
                type="time"
                id="delivery-time"
                className="w-full px-4 py-3 rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>
          </div>
        

  
  </div>
  
              <input type="checkbox" name="deliver" id="deliver"/>

              <label htmlFor='text' className=' text-indigo-950 font-semibold'>The driver's age between 30 and 65?(i)</label><br/>
<ul className=' text-indigo-950 font-semibold mt-3 mb-5'>
        <li> ✔ No credit fees</li>
        <li> ✔ No change fees</li>
        <li> ✔ Price natch guarantee</li>
        </ul>  
        <button className='text-white bg-orange-500 hover:bg-orange-600 w-[400px] justify-center text-center p-3 shadow-2xl rounded-2xl'>Search</button>
        </div>
      
</div>
  )
}

export default Rentacar