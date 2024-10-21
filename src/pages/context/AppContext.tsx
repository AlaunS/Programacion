import { createContext, useState } from "react";
import { MainApp } from "../../MainApp";

// CONTEXTO
export type AppContextType = {
    currentSelection: string,
    setCurrentSelection: any,
    resetCurrentSelection: any
}
const AppContextDefaultValues: AppContextType = {
    currentSelection: "",
    setCurrentSelection: () => null,
    resetCurrentSelection: () => null,
}

export const AppContext = createContext<AppContextType>(AppContextDefaultValues);
export const ContextApp = () => {

    const [currentSelection, setCurrentSelection] = useState('');
    const resetCurrentSelection = () => {
        setCurrentSelection('');
    }

    return (
        <AppContext.Provider value={{ currentSelection, setCurrentSelection, resetCurrentSelection }}>
            <MainApp />
        </AppContext.Provider>
    )
}