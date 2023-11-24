import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div className="Signup">
      <form className="Signup_form">
          <h2>Signup</h2>

          <label>Full name </label>
          <input type="text" placeholder="Write your full name" required></input>

          <label>User </label>
          <input type="text" placeholder="Write your user" required></input>

          <label>Password </label>
          <input type="password" placeholder="Write your password" required></input>
          
          <button className='button'>Signup</button>
      </form>
    </div>
  )
}

export default Signup;