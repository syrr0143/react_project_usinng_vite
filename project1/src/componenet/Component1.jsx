import React from 'react'
import Component2 from './Component2'

const Component1 = ({name}) => {
    
  return (
    <div>
      my name is :{name}
      <Component2/>
    </div>
  )
}

export default Component1
