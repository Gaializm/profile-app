import { createContext, useState, useContext } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    //variable to store the mode state
    const [mode, setMode] = useState("light");
    //function to update the mode state
    const handleModeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    return (
        <ModeContext.Provider value={{ mode, handleModeChange }}>
            {children}
        </ModeContext.Provider>
    )
}; 

export const useMode = () => useContext(ModeContext);