import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
const App = () => {           // Create a React component named App
  const {token} = useAppContext()
  return (
     <div> 
      <Toaster/>                    
      <Routes>               
        <Route path='/' element={<Home />} />      
        <Route path='/blog/:id' element={<Blog />} /> 
        <Route path='/admin' element={token? <Layout/>:<Login/>}>
           <Route index element={<Dashboard/>}/>   {/*child routes layout and all these routes comes along with the admin route */}
           <Route path='addBlog' element={<AddBlog/>}/>
           <Route path='listBlog' element={<ListBlog/>}/>
           <Route path='comments' element={<Comments/>}/>

        </Route>
      </Routes>
    </div>
  )
}
//  React Router: manage different pages
//  If URL is "/", show Home
//  If URL is "/blog", show Blog
export default App
