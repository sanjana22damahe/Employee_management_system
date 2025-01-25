import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

const [taskTitle,setTaskTitle]=useState('')
const [taskDescription,setTaskDescription]=useState('')
const [taskDate,SetTaskDate]=useState('')
const [assignTo,setAssignTo]=useState('')
const [category,setCategory]=useState('')

const [newTask,setNewTask]= useState([])
const [userData,setUserData]=useContext(AuthContext)
useEffect(()=>{
  console.log("check in create task useeefct",userData)
},[userData])


const submitHandler=(e)=>{
  e.preventDefault()
  // const data=JSON.parse(localStorage.getItem('employees'));//Jason.parse convert jason into array
  
  setNewTask({taskTitle,taskDescription,taskDate,assignTo,category,new_task:true,failed:false,completed:false})
  const data=userData.employees
  console.log("In Create Task",userData)

   data.forEach((elem)=>{
    if(assignTo == elem.firstname){    
         elem.tasks.push(newTask) 
         elem.task_count.new_task=elem.task_count.new_task+1
 }
   })

  //  console.log("just check data me new task push ho raha hai kya",data)
  // localStorage.setItem('employees',JSON.stringify(data))
  // console.log("check afyer ading into localstorage",data)
  console.log("check data format",data)
  setUserData({'employees':data})
  console.log("Check new auth Data",userData)

  setTaskTitle('')
  setTaskDescription('')
  SetTaskDate('')
  setAssignTo('')
  setCategory('')

}

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex  items-start justify-between'>
            
            <div className='w-1/2'>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5' >Task Title</h3>
            <input 
            value={taskTitle} onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded  bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='create task'></input>
            </div>
            
            
            <div className='w-1/2'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
            value={taskDate} onChange={(e)=>{
              SetTaskDate(e.target.value)
            }}
             className='text-sm py-1 px-2 w-4.5/5 rounded  bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input>
            </div>
            
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
            <input  value={assignTo} onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded  bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name'></input>
            </div>
            

            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={category} onChange={(e)=>{
              setCategory(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded  bg-transparent border-[1px] border-gray-400 mb-4'type='text' placeholder='design,dev etc'></input>
            </div>
            </div>


            <div >
          
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={taskDescription} onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
            className='text-sm py-2 px-4 w-full h-44 rounded  bg-transparent border-[1px] border-gray-400 mb-4'name='' id='' cols={30} rows={10}></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-2 w-full'>Create Task</button>
            </div>
            
            
            
            

        </form>
      </div>
  )
}

export default CreateTask
