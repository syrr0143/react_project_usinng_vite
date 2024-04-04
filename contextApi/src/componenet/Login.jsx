import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const { setuser } = useContext(userContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  }
  return (
    <div>
      <h2>login</h2>
      <input value={username} onChange={(e) => { setusername(e.target.value) }} className='rounded-lg bg-gray-200 p-4 mx-5 my-5' type="text" placeholder='username' />
      <input value={password} onChange={(e) => { setpassword(e.target.value) }} className='rounded-lg bg-gray-200 p-4 mx-5 my-5' type="text" placeholder='password' />
      <button onClick={handlesubmit} className='bg-black rounded lg p-3 text-white hover:bg-gray-300'>Submit</button>

      <button className='p-5 bg-gray-200 rounded-lg mx-[100px] hover:bg-red-500 hover:translate-x-4 duration-300'>change theme </button>
    </div>
  )
}

export default Login
