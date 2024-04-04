import React from 'react'
import useTheme from '../context/Theme'
const ThemeButton = () => {
  const {darkTheme,themeMode,lightTheme} = useTheme();
  
  const changeTheme = () => {
    if (themeMode) {
      lightTheme();
    } else {
      darkTheme();
    }
  };
 
  return (
    <div>
      <button className='bg-gray-200 p-5 rounded-lg hover:bg-gray-600' onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeButton
