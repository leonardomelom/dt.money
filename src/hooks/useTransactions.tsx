import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface TransactionType {
  id: number
  title: string
  amount: number
  categorie: string
  type: string
  createdAt: string
}

//Utilizando Omit, estamos omitindo id e createdAt 
// se utilizar Pick, podemos selecionar os campos que queremos
type TransactionInput = Omit<TransactionType, 'id' | 'createdAt'>

interface TransactionsProviderProps{
  children: ReactNode
}

interface TransactionContextData{
  transactions: TransactionType[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

 const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({children}:TransactionsProviderProps){
 
  const [transactions, setTransacrtions] = useState<TransactionType[]>([])
  useEffect(() => {
    api.get('transactions').then(res => setTransacrtions(res.data.transactions))
  }, [])

  async function createTransaction(transactionInput:TransactionInput){
    
   const response = await api.post('/transactions', {
    ...transactionInput,
       createdAt: new Date()
  })
   const { transaction } = response.data

   setTransacrtions([
    ...transactions,
    transaction
   ])
  }
  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}} >
      {children}
    </TransactionsContext.Provider>
  )
}


export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context
}