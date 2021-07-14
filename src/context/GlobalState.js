import React, {createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State

const initialState = {
  transactions:[
      { id: 1, text: 'Flower', amount: -250 },
      { id: 2, text: 'Salary', amount: 30000 },
      { id: 3, text: 'Book', amount: -200 },
      { id: 4, text: 'Camera', amount: -10500 }
    ]
}


// Create context
export const GlobalContext = createContext(initialState)

// provider componet

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const deleteTransaction = id => {
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
  }
  const AddTransaction = transaction => {
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return(<GlobalContext.Provider value ={{transactions:state.transactions,
    AddTransaction,
  deleteTransaction
  }}>{children}</GlobalContext.Provider>)
}