import React, { useContext,useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   
    // const authData=useContext(AuthContext)we can use different anme coz this is not key its compelte value
    const [userData,setUserData]=useContext(AuthContext)//access it here as key
    console.log(userData.employees)

    useEffect(()=>{
        console.log("check in All task useeefct",userData)
      },[userData])
      
    const updateddata=JSON.parse(localStorage.getItem('employees'))
    console.log(updateddata)

  return (

    <div id='alltask' className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 '>

<div className='bg-green-900 mb-2 py-4 px-5 flex rounded justify-between'>
              <h2 className='w-1/5 font-medium text-lg'>Employee Name</h2>
              <h3 className='w-1/5 font-medium text-lg'>New Task</h3>
              <h5 className='w-1/5 font-medium text-lg'>Active Task</h5>
              <h5 className='w-1/5 font-medium text-lg'>Completed</h5>
              <h5 className='w-1/5 font-medium text-lg'>Failed</h5>
          </div>


       <div id='alltaskchild' className='h-[80%] overflow-auto'>
       {userData.employees.map((elem,idx)=>{
              return <div key={idx} className=' border-2 border-emerald-600 mb-2 py-4 px-5 flex rounded justify-between '>
              <h2 className='w-1/5 font-medium text-lg text-white text-bold'>{elem.firstname}</h2>
              <h3 className='w-1/5 font-medium text-lg text-blue-700 text-bold'>{elem.task_count.new_task}</h3>
              <h5 className='w-1/5 font-medium text-lg text-purple-700'>{elem.task_count.active}</h5>
              <h5 className='w-1/5 font-medium text-lg text-green-700'>{elem.task_count.completed}</h5>
              <h5 className='w-1/5 font-medium text-lg text-red-700'>{elem.task_count.failed}</h5>
          </div>
       })}

       </div>
        
      
    </div>
  )
}

export default AllTask
