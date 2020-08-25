import { createContext } from 'react';
import Wallet from 'types/Wallet';
import Currencies from '../../enums/Currencies';

export interface ContextProps {
  loading: boolean;
  error: Error | null;
  quotations: {
    bitcoin: Wallet;
    brita: Wallet;
  };
  getWalletByCurrency: (
    currency: Currencies
  ) => Pick<Wallet, 'buy' | 'sell'>;
}

export default createContext<ContextProps>({
  loading: false,
  error: null,
  quotations: {
    bitcoin: { buy: 0, sell: 0 },
    brita: { buy: 0, sell: 0 }
  },
  getWalletByCurrency: () => ({ buy: 0, sell: 0 })
});
