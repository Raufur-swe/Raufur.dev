import React from 'react'
import Home from './pages/Home'
import Navber from './Components/Navber'
import { Route, Routes } from 'react-router-dom'
import MouseFollower from './Components/MouseFlower'

const App = () => {
  return (
    <div className='flex  flex-col '>
    <Navber/>
    <MouseFollower/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App