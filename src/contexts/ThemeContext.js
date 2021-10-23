import React, { createContext, useState } from "react";




export const ThemeContext = createContext;

const ThemeContextProvider = ({children}) => {
    //State

    const [theme, settheme] = useState({
        isLightTheme:true,
        light:{
            background:'rgb(240,240,240)',
            color:'black'
        },
        dark:{
            background:'rgb(39,39,39)',
            color:'white'
        }
    })

    // Context data
    const themeContextData = {
        theme:theme
    }

    // Return provider
    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;