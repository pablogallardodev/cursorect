import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('ligth');

  const handleTheme = (e) => setTheme(e.target.value)

  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>
}