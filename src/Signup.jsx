import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <h1>signup page</h1>
     <Link to={"/Login"}> <button>login</button></Link>
    </div>
  )
}

export default Signup