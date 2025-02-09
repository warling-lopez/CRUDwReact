import React, { useState } from 'react'
import {supabase} from '../supabase/client' 

function Login() {
  const [email, setEmail] = useState("")
  const eventSubmit = async (e)=>{
    e.preventDefault()
    
    try {
      await supabase.auth.signInWithOtp({
        email,
        
      })
    } catch (error) {
      console.error(error)
    }
    

  }
  return (
    <form onSubmit={eventSubmit}>
      <input 
      type="email" 
      name="email" 
      placeholder='youemail@site.com'
      onChange={(e)=> setEmail(e.target.value)} />
      <button>
        Send
      </button>
    </form>
  )
}

export default Login