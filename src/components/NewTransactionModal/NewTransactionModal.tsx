import React, { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, Button } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

interface newTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:newTransactionModalProps) {
  const {createTransaction} = useTransactions()
  const [type, setType] = useState('deposit')
  const [ title, setTitle] = useState('')
  const [ categorie, setCategorie] = useState('')
  const [ amount, setAmount] = useState(0)

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault()

    await createTransaction({title,amount,categorie, type})

    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategorie('')
    onRequestClose()
  }
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className="react-modal-content"
    >

      <button
       type='button'
       onClick={onRequestClose}
       className='react-modal-close'
       >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar transação</h2>

        <input 
        type="text"
        placeholder='Título'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />


        <input 
        type="number"
        placeholder='Valor' 
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <Button
          type='button'
          onClick={()=>{setType('deposit')}}
          isActive={type==='deposit'}
          activeColor="green"

          >
            <img 
            src={incomeImg} 
            alt="Entrada de valores" />
            <span>Entrada</span>
          </Button>
          
          <Button
          onClick={()=>{setType('withdraw')}}
          isActive={type==='withdraw'}
          activeColor="red"
          type='button'
          >
            <img 
            src={outcomeImg} 
            alt="Saída de valores" />
            <span>Saída</span>
          </Button>
        </TransactionTypeContainer>

        <input 
        type="text"
        placeholder='Categoria' 
        value={categorie}
        onChange={event => setCategorie(event.target.value)}
        />

        <button
        type='submit'
        >
          Cadastrar transação
        </button>
      </Container>
    </Modal>
  );
}

