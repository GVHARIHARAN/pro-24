import React from 'react'
import One from '../src/pro'
// import Sum from '../src/componments/navber'
import Sample from '../src/pro1'
// import Order from'../src/pro'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<One />} />
          <Route path='/pro1' element={<Sample />} />
          {/* <Route path='/pro/' element={<Order />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
