import React, { useState } from 'react'
import { supabase } from '../supabase/client'

function TaskForm() {
    const [taskname, setTaskname]= useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
        
        const resolt = await supabase.from('task').insert({
                name: taskname,
            })
            console.log(resolt)
        } catch (error) {
            console.error(error)
            console.log(resolt)
        }
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="Taskname" placeholder='write your task name' 
        onChange={(e)=> setTaskname(e.target.value)}/>
        <button >
            Add
        </button>
    </form>
  )
}

export default TaskForm