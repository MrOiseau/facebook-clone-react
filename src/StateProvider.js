import React, { createContext, useContext, useReducer } from 'react';

// Preparing the data layer
export const StateContext = createContext();                            

// Higher order component - wraps the app inside the state provider (provides data layer functionality)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// When we want to pull something from data layer
export const useStateValue = () => useContext(StateContext);
