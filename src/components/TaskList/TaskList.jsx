import React, { useEffect } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({userdata}) => {

   useEffect(()=>{
      console.log("Re render")
   })

  return (
   <div  id='tasklist'  className=' h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 mt-10 py-4 flex-wrap border border-black'>
    { userdata.tasks.map((elem,idx)=>{
      let components=[];
             if(elem.active){
               console.log('active',idx)
               components.push(<AcceptTask data={elem} key={`active-${idx}`}/>)
             }
             if(elem.new_task){
               console.log('new task',idx)
               components.push(<NewTask data={elem} key={`new-${idx}`}/>)
             }
             if(elem.completed){
               components.push(<CompleteTask  data={elem} key={`complete-${idx}`}/>)
             }
             if(elem.failed){
               components.push(<FailedTask data={elem} key={`faile-${idx}`}/>)
             }

            return <div key={idx} className='flex justify-start items-center gap-5'>{components}</div>
     })}
 </div>
  )


}


         




export default TaskList
