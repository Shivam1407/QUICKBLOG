import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'

const App = () => {           // Create a React component named App
  return (
     <div>                     
      <Routes>               
        <Route path='/' element={<Home />} />      
        <Route path='/blog' element={<Blog />} /> 
      </Routes>
    </div>
  )
}
//  React Router: manage different pages
//  If URL is "/", show Home
//  If URL is "/blog", show Blog
export default App
