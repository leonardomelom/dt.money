import React from 'react';
import { Summary } from '../Summary/Index';
import { TransactionTable } from '../TransactionsTable/Index';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  );
}

