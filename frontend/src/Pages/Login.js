import React, { useState } from 'react'
import '../Style/style.scss'

function Login() {
  const [signup, setSignup] =useState(false)
  const [name, setName] =useState('')
  const [password, setPassword] =useState('')
  return (
    <>
  
    <div className='loginScreen'>

    {
       signup === true ? 
       (  
        <form >
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
            <input type="email" placeholder='Email or Phone' />
            <input type="password" placeholder='Password' />
            <h3 className='link'>Forgot Password?</h3>

            <input type="submit" value="Sign in" />
            <h4>New to LinkedIn? <span onClick={()=>setSignup(false)}>Join now</span> </h4>

        </form>
      ) 
      : 
      (
        <form>
            <h3 className='headline'>Make the most of your professional life</h3>
            <label htmlFor="FullName">Email or phonenumber</label>
            <input type="text"  />

            <label htmlFor="Password">Password (6 or more characters)</label>
            <input type="text"  />

            <input type="submit" value= "Agree & Join" />

            <h4>Already on LinkedIn? <span onClick={()=>setSignup(true)}>Sign in</span> </h4>

        </form>
      )
    }

        


   
    </div>
    </>
  )
}

// value={password} onChange={e=>setPassword(e.target.value)} 
// onClick={e=>setSignup(false)}

export default Login