import Transaction from '../../../types/Transaction';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';

interface AddTransaction {
  type: typeof ADD_TRANSACTION;
  payload: Transaction;
}

export interface TransactionState {
  transactions: Transaction[];
}

export type TransactionAction = AddTransaction;
