import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header/Header"
import Modal from 'react-modal'
import { useState } from "react"
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal"
import { TransactionsProvider } from "./hooks/useTransactions"

//acessibilidade, passando modal.setAppElement, ele não le o resto da pagina, somente o modal
Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
  <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal }/>
    <Dashboard/>
    <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />
  </TransactionsProvider>
  )
}

export default App
