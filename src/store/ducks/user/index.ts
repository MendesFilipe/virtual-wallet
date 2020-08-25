import {
  UsersAction,
  ADD_NEW_USER,
  LOGIN,
  LOGOUT,
  UserState,
  BUY,
  SELL
} from './types';

export const initialState: UserState = {
  users: []
};

function reducer(state = initialState, action: UsersAction): UserState {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        users: [...state.users, action.payload]
      };
    case LOGIN:
      const { email } = action.payload;
      return {
        users: state.users.map(user => {
          return user.email === email
            ? { ...user, isAuthenticated: true }
            : user;
        })
      };
    case LOGOUT:
      return {
        users: state.users.map(user => ({ ...user, isAuthenticated: false }))
      };
    case BUY:
      return {
        users: state.users.map(user => {
          return user.email === action.payload.email
            ? {
                ...user,
                balance: {
                  ...user.balance,
                  [action.payload.currency]:
                    action.payload.amount +
                    user.balance[action.payload.currency]
                }
              }
            : user;
        })
      };
    case SELL:
      return {
        users: state.users.map(user => {
          return user.email === action.payload.email
            ? {
                ...user,
                balance: {
                  ...user.balance,
                  [action.payload.currency]:
                    user.balance[action.payload.currency] -
                    action.payload.amount
                }
              }
            : user;
        })
      };
    default:
      return state;
  }
}

export default reducer;
