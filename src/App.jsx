import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Background from './Background'

const App = () => {
  const ref = useRef(null);
  const [Tasks, setTasks] = useState("")
  const [Description, setDescription] = useState("")  
  const [TaskList, setTaskList] = useState([])
  const [DescriptionList, setDescriptionList] = useState([])  
  return (
    
    <div className=' h-screen w-screen overflow-x-hidden ' >
      <Background />
    <div className=' h-[13vh] w-screen absolute top-0 left-0  flex   justify-start'>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("hiiiii")
        console.log("Task:" , Tasks)
        console.log("Description:" , Description)
        setTasks("")
        setDescription("")
        setTaskList([...TaskList, Tasks])
        setDescriptionList([...DescriptionList, Description])

      }}>
        <input type="text" placeholder='Enter a task' value={Tasks}
        onChange={(e)=>{
          setTasks(e.target.value)
        }}
        className='border rounded-full border-white text-white border-4 m-4 px-4 py-2 text-xl' />
        <input type="text" placeholder='Enter a Description' value={Description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        className='border rounded-full border-white text-white border-4 m-4 px-4 py-2 text-xl' />
        <button className='border text-white m-5 bg-zinc-800 rounded font-bold p-1 text-2xl border-white border-4' type='submit'>Add Task</button>
      </form>
    
      </div>
      <div ref={ref} className='h-[87vh] absolute top-[13vh] left-0 w-screen flex flex-wrap justify-start items-start overflow-y-auto'>
          {TaskList.map((task, index) => (
          <motion.div drag dragConstraints={ref} whileDrag={{ scale: 1.2 }} dragTransition={{
    bounceStiffness: 600,
    bounceDamping: 10
  }} id='cards' key={index} className=' relative h-[10vw] w-[17vh] ml-2 mr-2 pl-2  border-2  border-white bg-white rounded-lg'>
            <h2 className='text-xl text-black font-bold'>{task}</h2>
            <p className='text-zinc-800'>{DescriptionList[index]}</p>
            <button className='absolute bottom-2 right-2 rounded font-bold text-xl bg-white text-black' onClick={()=>{
              const newTaskList = TaskList.filter((_, i) => i !== index);
              const newDescriptionList = DescriptionList.filter((_, i) => i !== index);
              setTaskList(newTaskList);
              setDescriptionList(newDescriptionList);
            }}><i className="fas fa-trash-can"></i></button>
          </motion.div>
        ))}
      
      
      
    </div>
    </div>
  )
}

export default App
