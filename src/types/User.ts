import { Balance } from './Balance';

export default interface User {
  email: string;
  password: string;
  isAuthenticated: boolean;
  balance: Balance[];
}
