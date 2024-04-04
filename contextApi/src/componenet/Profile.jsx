import React, { useContext } from 'react'
import userContext from '../context/UserContext'
function Profile() {
  const { user } = useContext(userContext)
  if (!user) {
    return <div>please login first</div>
  }
  else {
    return <div className='bg-gray-200 py-5 m-5 mx-auto text-center text-pink-500 font-bold underline decoration-dotted decoration-8 underline-offset-8' > welcome {user.password}</div>
  }
 
}

export default Profile
