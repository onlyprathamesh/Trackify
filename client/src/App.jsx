import React from 'react'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element ={<HomePage />} />
          <Route path='/login' element ={<UserLogin />} />
          <Route path='/register' element ={<UserSignUp/>} />
          <Route path='/products' element ={<Products />} />
          <Route path='/contact-us' element ={<Contact />} />
          <Route path='/admin' element ={<Admin />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
