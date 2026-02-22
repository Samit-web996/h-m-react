import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className='outer1'>
      <div className='inner'></div>
      <Link to={'/content'}><button>go to home</button></Link>
    </div>
    
  )
}

export default Login