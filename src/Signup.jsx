import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Background from './Background'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Add your signup logic here
    console.log('Signup:', { username, email, password })
    // After successful signup, navigate to login
    navigate('/login')
  }

  return (
    <div>
      <Background />
      <form onSubmit={handleSubmit} className='h-auto w-[50vw] bg-zinc-800 border border-zinc-700 border-8 rounded-lg text-xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 p-8'>
        <h1 className='text-3xl mb-4'>Create Account</h1>
        
        {error && <p className='text-red-400 text-lg'>{error}</p>}
        
        <input 
          type='text' 
          placeholder='Enter your username' 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='m-3 border-zinc-700 border-2 p-2 rounded text-black w-full'
        />
        
        <input 
          type='email' 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='m-3 border-zinc-700 border-2 p-2 rounded text-black w-full'
        />
        
        <input 
          type='password' 
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='m-3 border-zinc-700 border-2 p-2 rounded text-black w-full'
        />
        
        <input 
          type='password' 
          placeholder='Confirm your password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='mb-3 border-zinc-700 border-2 p-2 rounded text-black w-full'
        />
        
        <input 
          type='submit' 
          value='Create Account' 
          className='bg-zinc-900 p-2 w-[15vw] rounded border-zinc-700 border-2 cursor-pointer hover:bg-zinc-700'
        />
        
        <p className='text-sm mt-2'>
          Already have an account? 
          <button 
            type='button'
            onClick={() => navigate('/login')}
            className='text-blue-400 ml-2 underline hover:text-blue-300'
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  )
}

export default Signup
