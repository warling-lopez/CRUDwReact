import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>,
)
