import { ADD_TRANSACTION, TransactionAction, TransactionState } from './types';

export const initialState: TransactionState = {
  transactions: []
};

function reducer(
  state = initialState,
  action: TransactionAction
): TransactionState {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRANSACTION:
      return {
        transactions: [...state.transactions, payload]
      };
    default:
      return state;
  }
}

export default reducer;
