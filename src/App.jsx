import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import Notfound from './pages/Notfound'
import Others from './pages/Others'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/others" element={<Others/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Router>
  )
}

export default App