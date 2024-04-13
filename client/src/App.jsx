import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<HomePage />} />
          <Route path='/login' element ={<UserLogin />} />
          <Route path='/register' element ={<UserSignUp/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
