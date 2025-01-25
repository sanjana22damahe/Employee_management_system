import React from 'react'

const TaskListNumber = ({userdata}) => {
  return (
    <div className=' flex screen mt-10 justify-between gap-5'>
        
        <div className='h-40 w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{userdata.task_count.new_task}</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>

        <div className='h-40 w-[45%] py-6 px-9 rounded-xl bg-green-400'>
            <h2 className='text-3xl font-semibold'>{userdata.task_count.completed}</h2>
            <h3 className='text-2xl font-semibold'>Completed</h3>
        </div>

        <div className='h-40 w-[45%] py-6 px-9 rounded-xl bg-purple-400'>
            <h2 className='text-3xl font-semibold'>{userdata.task_count.active}</h2>
            <h3 className='text-2xl font-semibold'>Accepted Task</h3>
        </div>

        <div className='h-40 w-[45%] py-6 px-9 rounded-xl bg-gray-400'>
            <h2 className='text-3xl font-semibold'>{userdata.task_count.failed}</h2>
            <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>

    </div>
  )
}
export default TaskListNumber
