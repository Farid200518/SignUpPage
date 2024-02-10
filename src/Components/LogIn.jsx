import React, { useState } from 'react'
import '../Components/LogIn.css'
 
const SignUpPage = () => {
  const [userData, setUserData] = useState({ name: "", surname: "", email: "", password: "" })
 
  const handleChange = (type, data) => {
    setUserData(prev => ({ ...prev, ...{ [type]: data } }))
  }
 
  function signUp(e) {
    e.preventDefault()
    const users = localStorage.getItem("users")
    localStorage.setItem('users', users ? JSON.stringify([...JSON.parse(users), userData]) : JSON.stringify([userData]))
  }
 
  return (
    <div className='container'>
      <h1 className='title'>Sign Up</h1>
      <form onSubmit={signUp} id='login-form'>
 
        <input type='text' placeholder='Name' required onChange={(e) => handleChange("name", e.target.value)} />
        <input type='text' placeholder='Surname' required onChange={(e) => handleChange("surname", e.target.value)} />
        <input type='email' placeholder='Email' required onChange={(e) => handleChange("email", e.target.value)} />
        <input type='password' placeholder='Password' required onChange={(e) => handleChange("password", e.target.value)} />
        <button className='btn'>Log in</button>
      </form>
    </div>
  )
}
 
export default SignUpPage