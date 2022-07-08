import {
    createContext,
    useContext,
    useState,
    useEffect
 } from "react";

 const ThemeContext = createContext();

 const ThemeProvider = ({
    children
 }) => {
    const setNewTheme = () => {
       const newTheme = localStorage.getItem("theme");
       return newTheme === null ? "light" : newTheme;
    };

    const [theme, setTheme] = useState(setNewTheme());

    useEffect(() => {
       localStorage.setItem("theme", theme);
    }, [theme]);

    return ( <ThemeContext.Provider value = {
          {
             theme,
             setTheme
          }
       } > {
          children
       } </ThemeContext.Provider>
    );
 };

 const useTheme = () => useContext(ThemeContext);

 export {
    useTheme,
    ThemeProvider
 };