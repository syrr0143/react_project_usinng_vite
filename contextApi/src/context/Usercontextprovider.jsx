import react, { useState } from 'react'
import userContext from './UserContext'

const Usercontextprovider = ({ children }) => {
    const [user, setuser] = useState(null);
    return (
        <userContext.Provider value={{ user, setuser }}>
            {children}
        </userContext.Provider>
    )
}

export default Usercontextprovider;