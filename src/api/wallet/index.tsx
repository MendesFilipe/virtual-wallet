import {  ReactElement,  ReactNode, Component } from 'react';
import WalletContext from './WalletContext';
import Wallet from 'types/Wallet';
import getBitcoinValue from '../../services/wallet/bitcoin';
import getDollarValue from '../../services/wallet/dollar';
import Currencies from '../../enums/Currencies';

interface QuotationAPIState {
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

class WalletAPI extends Component<ReactNode, QuotationAPIState> {
  getWalletByCurrency = (
    currency: Currencies
  ): Pick<Wallet, 'buy' | 'sell'> => {
    const { quotations } = this.state;
    const { REAL, BITCOIN, BRITA } = Currencies;
    switch (currency) {
      case REAL:
        return { buy: 1, sell: 1 };
      case BITCOIN:
        return quotations.bitcoin;
      case BRITA:
        return quotations.brita;
      default:
        return { buy: 1, sell: 1 };
    }
  };

  state = {
    loading: false,
    error: null,
    quotations: { bitcoin: { buy: 0, sell: 0 }, brita: { buy: 0, sell: 0 } },
    getWalletByCurrency: this.getWalletByCurrency
  };

  public async getInitialData(): Promise<void> {
    this.setState({ loading: true });
    const bitcoin = await getBitcoinValue();
    const brita = await getDollarValue();
    this.setState({ loading: false, quotations: { bitcoin, brita } });
  }

  public componentDidMount(): void {
    this.getInitialData();
  }

  public render(): ReactElement {
    return (
      <WalletContext.Provider value={this.state}>
        {this.props.children}
      </WalletContext.Provider>
    );
  }
}

export default WalletAPI;
