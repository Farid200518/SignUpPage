import React, {useState} from 'react'
import '../Components/LogIn.css'

const SignUpPage = () => {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')

  async function signUp() {
    let item = {
      name, 
      surname,
      email,
      password,
    }
    const userData = JSON.stringify(item)

    localStorage.setItem('user', userData)
  }
  

  return (
    <div className='container'>
      <h1 className='title'>Sign Up</h1>
      <form onSubmit={signUp} id='login-form'>
        
        <input type='text' placeholder='Name'  required onChange={(e)=>setName(e.target.value)} />
        <input type='text' placeholder='Surname'  required onChange={(e)=>setSurname(e.target.value)} />
        <input type='email' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} />
        <button className='btn'>Log in</button>
      </form>
    </div>
  )
}

export default SignUpPage
