import { useState } from "react"
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
   const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
   return [darkMode, setDarkMode]; 
}

export default useDarkMode; 