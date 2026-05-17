import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Background from './Background'

const Tasks = () => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const [tasks, setTasks] = useState("")
  const [Description, setDescription] = useState("")  
  const [TaskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [DescriptionList, setDescriptionList] = useState(() => {
    const savedDescription = localStorage.getItem('descriptions')
    return savedDescription ? JSON.parse(savedDescription) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(TaskList))
  }, [TaskList])

  useEffect(() => {
    localStorage.setItem('descriptions', JSON.stringify(DescriptionList))
  }, [DescriptionList])

  const handleAddTask = (e) => {
    e.preventDefault()
    if (tasks.trim()) {
      setTaskList([...TaskList, tasks])
      setDescriptionList([...DescriptionList, Description])
      setTasks("")
      setDescription("")
    }
  }

  const handleDeleteTask = (index) => {
    const newTaskList = TaskList.filter((_, i) => i !== index)
    const newDescriptionList = DescriptionList.filter((_, i) => i !== index)
    setTaskList(newTaskList)
    setDescriptionList(newDescriptionList)
  }

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className='h-screen w-screen overflow-x-hidden '>
      <Background />
      
   
      <button 
        onClick={handleLogout}
        className='absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 z-50'
      >
        Logout
      </button>

     
      <div className='h-[13vh] w-screen absolute top-0 left-0 flex justify-start pt-4'>
        <form onSubmit={handleAddTask}>
          <input 
            type="text" 
            placeholder='Enter a task' 
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            className='border rounded-full border-white text-white border-4 m-4 px-4 py-2 text-xl bg-zinc-800' 
          />
          <input 
            type="text" 
            placeholder='Enter a Description' 
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className='border rounded-full border-white text-white border-4 m-4 px-4 py-2 text-xl bg-zinc-800' 
          />
          <button 
            className='border text-white m-5 bg-zinc-800 rounded font-bold p-1 text-2xl border-white border-4 cursor-pointer hover:bg-zinc-700' 
            type='submit'
          >
            Add Task
          </button>
        </form>
      </div>

      <div ref={ref} className=' absolute top-[13vh]  left-0 bottom-0 right-0 w-full flex flex-wrap justify-start items-start overflow-hidden p-4'>
        {TaskList.map((task, index) => (
          <motion.div 
            drag 
            dragConstraints={ref} 
            whileDrag={{ scale: 1.2, boxShadow: "0px 10px 20px rgb(255, 255, 255)" }} 
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10
            }} 
            id='cards' 
            key={index} 
            className='relative h-[10vw] w-[17vh] ml-2 mr-2 pl-2 border-2 border-white bg-white rounded-lg'
          >
            <h2 className='text-xl text-black font-bold'>{task}</h2>
            <p className='text-zinc-800'>{DescriptionList[index]}</p>
            <button 
              className='absolute bottom-2 right-2 rounded font-bold text-xl bg-white text-black cursor-pointer hover:bg-gray-200' 
              onClick={() => handleDeleteTask(index)}
            >
              <i className="fas fa-trash-can"></i>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Tasks
