import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  // console.log(props.userdata)
  return (
  <div className='p-10 bg-[#1C1C1C] h-screen'>
    
      <Header  changeUser={props.changeUser} userdata={props.userdata}/>
      <TaskListNumber userdata={props.userdata}/>
      <TaskList userdata={props.userdata}/>
  </div>
   
  
  )
}

export default EmployeeDashboard
