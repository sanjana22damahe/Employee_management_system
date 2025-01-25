import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[300px] flex-shrink-0 text-white bg-green-500 rounded-xl p-4 '>
            <div className='flex items-center justify-between' >
            <h3 className='bg-yellow-100 px-3 py-1 rounded text-black' >{data.category}</h3>
            <h2 className='text-sm' >{data.task_date}</h2>
         </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.task_title}</h2>
            <p className='text-sm py-2'>{data.task_description}</p>

            <div className='mt-2'>
                <button className='w-full'>Completed</button>
            </div>
         </div>
  )
}

export default CompleteTask
