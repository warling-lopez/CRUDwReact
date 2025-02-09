import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import Login from './Login'
import TaskForm from '../components/TaskForm'

function Home() {
    const navega = useNavigate()
   useEffect(() => {
     supabase.auth.onAuthStateChange((event, session) =>{
       if (!session) {
        navega('/login')
       } else {
        navega('/')
       }
     })
   },[])
    
  return (<>
    <h1>Home</h1>
    <button onClick={()=>supabase.auth.signOut()}>
    LogOut
    </button>
    <TaskForm/>
  </>)
}

export default Home