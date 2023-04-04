import { createContext, useContext } from "react";

const GlobalStates = createContext();

const Context = ({children}) =>  {
    const [salario, setSalario] = useSate(1500)

    return(

        <GlobalStates.Provider value={{salario, setSalario}}>
            {children}

        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobalSates = () => useContext(GlobalStates)