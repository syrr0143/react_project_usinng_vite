
import React, { createContext, useContext } from 'react'

export const Themecontext = createContext({
    themeMode: true,
    darkTheme: () => { },
    lightTheme: () => { }

});

export const ThemeProvider = Themecontext.Provider
export default function  useTheme  () {
    return useContext(Themecontext);
}