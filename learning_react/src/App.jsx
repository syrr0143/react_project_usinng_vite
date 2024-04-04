import { useEffect, useState } from 'react'
import './App.css'
import Crd from './components/Crd.jsx'
import ThemeButton from './components/ThemeButton.jsx'
import { ThemeProvider,Themecontext } from './context/Theme'

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }
  // useEffect(() => {
  //   document.querySelector('html').classList.remove('light', 'dark')
  //   document.querySelector('html').classList.add(themeMode)
  // }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div>
      <ThemeButton/>
       <Crd/>
      </div>
    </ThemeProvider>
  )
}

export default App
