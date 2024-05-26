import React, { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within a AppProvider");    
        return {}
    }

    return context;
}

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}
