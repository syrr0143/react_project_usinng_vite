import { useState } from 'react'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './componenet/Login'
import Profile from './componenet/Profile'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <Usercontextprovider>
      <Login />
      <Profile />
    </Usercontextprovider>
  )
}

export default App
