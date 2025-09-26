import React from 'react'

function Product() {
  return (
    <div className='flex flex-col min-h-screen bg-blue-50 bg-cover '>
        <div className='bg-white  w-[600px] h-[430px] rounded-2xl justify-center items-center  m-auto shadow-2xl p-10'>
           <div className=' '>
            <img src='public/images/headset.png' className='float-left h-45 w-50 mb-90 '/>
            <h1 className='text-white bg-indigo-950 rounded-2xl items-center m-auto w-28 text-center mb-2'>Free shipping</h1>
            <h1 className='text-indigo-950 font-semibold mb-3'>Razer Kraken Kitty Edt Gaming Headser Quartz</h1>
            <h1 className="line-through text-indigo-950"> 1599,-</h1>
            <h1 className=" text-indigo-950 font-bold text-3xl mb-2">799,-</h1>
            <p className='text-gray-400 mb-3'>The offer is valid until April 3 or as long as stock lasts!</p>
            <button className='bg-blue-500 text-white text-center w-[300px] p-2 shadow-2xl hover:bg-blue-600 mb-4 border-2 border-blue-500'>Add to cart</button>
            <ul className="list-disc marker:text-green-500">
              <li className=" text-black mb-3"> 50+ pcs.in stock</li>
            </ul>
            <button className='text-indigo-950 text-center border-2 border-gray-200 p-1 w-35'>Add to cart</button>
                        <button className='text-indigo-950 text-center border-2 border-gray-200 p-1 w-35 ml-2'>♥ Add to wishlist</button>


        </div>
        <div>
          
        </div>
        
        </div>
       
    </div>
  )
}

export default Product