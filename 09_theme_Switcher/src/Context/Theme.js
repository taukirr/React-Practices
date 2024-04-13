import {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode : 'Light',
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvide = ThemeContext.Provider

export default function UseTheme (){
    return useContext(ThemeContext)
}
