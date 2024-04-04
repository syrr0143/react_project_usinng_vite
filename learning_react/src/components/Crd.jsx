import React from 'react'
import useTheme from '../context/Theme'
const Crd = () => {
  const {darkTheme,themeMode,lightTheme} = useTheme();
  
  return (
    // <div className=`border-red-500 border-2 p-12 m-10 rounded-lg font-bold cursor-not-allowed 'dark:border-gray-700 dark:bg-gray-800' : ''}`>
    <div className='border-red-500 border-2 p-12  m-10 rounded-lg font-bold cursor-not-allowed dark:border-gray-900 dark:bg-gray-800'>
      hello this is a card
    </div>
  )
}

export default Crd
