import User from 'types/User';

export const ADD_NEW_USER = 'ADD_NEW_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const BUY = 'BUY';
export const SELL = 'SELL';

export interface UserState {
  users: User[];
}

interface AddNewUser {
  type: typeof ADD_NEW_USER;
  payload: User;
}

interface Login {
  type: typeof LOGIN;
  payload: Pick<User, 'email'>;
}

interface Logout {
  type: typeof LOGOUT;
  payload: null;
}

interface Buy {
  type: typeof BUY;
  payload: {
    email: string;
    amount: number;
    currency: number;
  };
}

interface Sell {
  type: typeof SELL;
  payload: {
    email: string;
    amount: number;
    currency: number;
  };
}

export type UsersAction = AddNewUser | Login | Logout | Buy | Sell;
