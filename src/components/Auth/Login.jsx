import React, { useState } from 'react'


const Login = ({handleLogin}) => {
const [email, setEmail] = useState('')
const [password,setPassword] = useState('')

const submitHandler=(e)=>{
    e.preventDefault()
   handleLogin(email,password)
   setEmail("")
   setPassword("")
}

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-black'>
        <div className='border-2 p-20 border-emerald-600  rounded-xl'>
            <form 
            onSubmit={(e)=>{submitHandler(e)}}
            className='flex flex-col items-center bg-transparent justify-center '>
                <input 
             
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                 className='bg-transparent text-white outline-none border-2 border-emerald-600 text-xl rounded-full py-4 px-5 placeholder:text-gray-400' 
                  type='email' value={email} placeholder='Enter your Email'></input>
                <input 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className=' bg-transparent text-white outline-none border-2 mt-3 border-emerald-600 text-xl rounded-full py-4 px-5 placeholder:text-gray-400'
                 type='password' value={password} placeholder='Enter Password'></input>
                <button className='text-white outline-none mt-5 border-none border-2 bg-emerald-600 text-xl rounded-full py-4 px-5'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
