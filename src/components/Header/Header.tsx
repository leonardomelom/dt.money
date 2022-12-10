import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles';
import Modal from 'react-modal'

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}:HeaderProps) {
 
  return (
    <Container>
      <Content>
      <img src={Logo} alt="DT Money" />
      <button type='button' onClick={onOpenNewTransactionModal}>
        Nova Transação
      </button>

     
      </Content>
    </Container>
  );
}

