import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

const logOutUser=()=>{
  localStorage.setItem('loggedinuser','')
  // window.location.reload()
  props.changeUser('')
}

  return (
   
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl   font-medium'>Hello <br/><span  className='text-3xl '>{props.userdata.name}</span></h1>
        <button  onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-7 py-1 rounded-sm'>Log Out</button>
    </div> 
    
  )
}

export default Header
