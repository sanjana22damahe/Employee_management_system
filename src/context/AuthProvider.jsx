 import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
 


 export const AuthContext=createContext()

 const AuthProvider = ({children}) => {
  // localStorage.clear()
  const [userData,setUserData]=useState(null)

       useEffect(()=>{
        setLocalStorage()
       const storedData=getLocalStorage();
     if(storedData){
      const {employees,admin}=storedData
      setUserData({employees,admin})
     }    
      },[])

      useEffect(() => {
         console.log('Checking in AuthProvider',userData)
      }, [userData])
 

   return (
    <div>
    <AuthContext.Provider value={[userData,setUserData]}> {/*passing object so it will take as a key */}
    {/* if we pass just value userData then we will access it just by using value in Alltask */}
       {children}
    
    </AuthContext.Provider>
    </div>
     
   )
 }
 
 export default AuthProvider
 