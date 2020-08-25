import Transaction from '../../../types/Transaction';
import { ADD_TRANSACTION, TransactionAction } from './types';

function addTransaction(transaction: Transaction): TransactionAction {
  return {
    type: ADD_TRANSACTION,
    payload: transaction
  };
}

export { addTransaction };
