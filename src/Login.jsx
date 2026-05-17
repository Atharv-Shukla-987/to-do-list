import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Background from './Background'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

  
    if (!username || !password) {
      setError('Username and password are required')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    console.log('Login:', { username, password })
    navigate('/tasks')
  }

  return (
    <div>
      <Background />
      <form onSubmit={handleSubmit} className='h-[50vh] w-[50vw] bg-zinc-800 border border-zinc-700 border-8 rounded-lg text-xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4'>
        <h1 className='text-3xl mt-4'>Login</h1>
        
        {error && <p className='text-red-400 text-lg'>{error}</p>}
        <input 
          type='text' 
          placeholder='Enter your username' 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='m-3 border-zinc-700 border-2 p-2 rounded text-black'
        />
        <input 
          type='password' 
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-3 border-zinc-700 border-2 p-2 rounded text-black'
        />
        <input 
          type='submit' 
          value='Login' 
          className='bg-zinc-900 p-2 w-[7vw] rounded border-zinc-700 border-2 cursor-pointer hover:bg-zinc-700'
        />
        <p className='text-sm mb-4'>
          Don't have an account? 
          <button 
            type='button'
            onClick={() => navigate('/signup')}
            className='text-blue-400 ml-2 underline hover:text-blue-300'
          >
            Create one
          </button>
        </p>
      </form>
    </div>
  )
}

export default Login
