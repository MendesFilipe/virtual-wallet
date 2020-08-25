// @ts-nocheck
import { combineReducers, Reducer } from 'redux';
import users from './user';
import transactions from './transactions';
import { UserState } from './user/types';
import { TransactionState } from './transactions/types';

export interface AppState {
  users: UserState;
  transactions: TransactionState;
}

const appReducer: Reducer<AppState> = combineReducers({
  users,
  transactions
});

const rootReducer: Reducer<AppState> = (state, action): AppState => {
  return appReducer(state, action);
};

export default rootReducer;
