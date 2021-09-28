import React, { createContext, useEffect, useReducer} from 'react'
import {darkTheme} from '../themes';
import AppReducer from './AppReducer';

//@Funções
import {getTarefas} from './Functions';

const GlobalContext = createContext();


const initialState = {
    theme: darkTheme,
    tarefas: [],
    error: 'Insira o texto!',
    loading: true,
    tarefasFiltred: '',
}


export function GlobalContextProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer,initialState);
   
  
    useEffect(() => {
        getTarefas(dispatch);
        }, [])

    return (
        <GlobalContext.Provider value={{state, dispatch, getTarefas}} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
