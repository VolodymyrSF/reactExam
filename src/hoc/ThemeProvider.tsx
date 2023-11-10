// import {createContext, Dispatch, SetStateAction, useState} from "react";
//
// type TypeSetState<T>=Dispatch<SetStateAction<T>>
//
// interface ITheme{
//     themeType:'Light'|'Dark'
//     setThemeType:TypeSetState<string>
// }
//
// const ThemeContext=createContext<ITheme>()
//
// const ThemeProvider=({children})=>{
//     const [themeType,setThemeType]=useState('Light')
//     return<ThemeContext.Provider value={{themeType,setThemeType}}>
//         {children}
//     </ThemeContext.Provider>
// }
export {}