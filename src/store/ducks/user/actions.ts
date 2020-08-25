import User from 'types/User';
import { UsersAction, ADD_NEW_USER, LOGIN, LOGOUT, BUY, SELL } from './types';
import Currencies from '../../../enums/Currencies';

function addUser(user: User): UsersAction {
  return {
    type: ADD_NEW_USER,
    payload: user
  };
}

function login(email: string): UsersAction {
  return {
    type: LOGIN,
    payload: { email }
  };
}

function logout(): UsersAction {
  return {
    type: LOGOUT,
    payload: null
  };
}

function buy(email: string, amount: number, currency: Currencies): UsersAction {
  return {
    type: BUY,
    payload: {
      email,
      amount,
      currency
    }
  };
}
function sell(
  email: string,
  amount: number,
  currency: Currencies
): UsersAction {
  return {
    type: SELL,
    payload: {
      email,
      amount,
      currency
    }
  };
}

export { addUser, login, logout, buy, sell };
