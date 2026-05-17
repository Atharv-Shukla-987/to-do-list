import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Tasks from './Tasks'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
