import React, { useEffect, useState } from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskListNumber from './components/other/TaskListNumber'
import TaskList from './components/TaskList/TaskList'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]= useState(null)
  const [userData,setUserData]= useContext(AuthContext)

  useEffect(()=>{
         const loggedInUser= localStorage.getItem('loggedinuser')
         
         if(loggedInUser){
          console.log(loggedInUser)
          const authdata=JSON.parse(loggedInUser)
          console.log(authdata)
          setUser(authdata.role)
          setLoggedInUserData(authdata.data)
         }
  },[]) 
   

  const handleLogin =(email,password)=>{
  
   console.log("just if ke pehle app me ",userData)
    if(email == 'admin@example.com' && password == '123' )
    {
    
        setUser('admin')
        // setLoggedInUserData(userData.admin)
        localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
    
       

    }else if(userData && userData.employees){
      const employee=userData.employees.find((e)=>email==e.email && password==e.password)
      console.log("check employee",employee)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedinuser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      alert("Invalid credential")
    }
  }

  
  return (
    <>

       {!user?<Login handleLogin={handleLogin}/>:''}
       {user=='admin'?<AdminDashboard   userdata={{"name":"Admin1123"}} changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard  userdata={loggedInUserData} changeUser={setUser}/>:null)}
    </>
  )
}

export default App
