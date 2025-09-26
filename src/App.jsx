import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Subscription from './Pages/Subscription'
import Product from './Pages/Product'
import Rentacar from './Pages/Rentacar'
import Pricing from './Pages/Pricing'
import Billing from './Pages/Billing'

import Animal from './Pages/Animal'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Subscription" element={<Subscription/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Rentacar' element={<Rentacar/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Billing' element={<Billing/>}/>
        <Route path='/Animal' element={<Animal/>}/>
         <Route path='/Login' element={<Login/>}/>


              </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
