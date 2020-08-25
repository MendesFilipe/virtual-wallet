import { ReactElement, useContext, SyntheticEvent } from 'react';
import WalletTransaction from './WalletTransaction';
import Currencies from '../../enums/Currencies';
import toBRL from '../../utils/toBRL';
import WalletContext, {
  ContextProps
} from '../../api/wallet/WalletContext';
import { Balance } from '../../types/Balance';

interface WalletContainerProps {
  currency: Currencies;
  callback: {
    sell: (currency: Currencies) => (e: SyntheticEvent) => any;
    buy: (currency: Currencies) => (e: SyntheticEvent) => any;
  };
  balance: Balance;
}

export default (props: WalletContainerProps): ReactElement => {
  const { loading, getWalletByCurrency } = useContext<ContextProps>(
    WalletContext
  );
  const { currency, callback, balance } = props;
  const buyQuotation = getWalletByCurrency(currency).buy;
  const sellQuotation = getWalletByCurrency(currency).sell;

  const formatedQuotationBuy = toBRL(buyQuotation || 0);
  const formatedQuotationSell = toBRL(sellQuotation || 0);

  const quotations = {
    buy: formatedQuotationBuy,
    sell: formatedQuotationSell
  };

  const value = {
    buy: buyQuotation ? balance * buyQuotation : 0,
    sell: sellQuotation ? balance * sellQuotation : 0
  };

  const isBitcoin = (): boolean => currency === Currencies.BITCOIN;
  const getBalance = (): string => toBRL(value.buy);
  const getTitle = (): string => (isBitcoin() ? 'BITCOIN' : 'BRITA');

  const getSubtitle = (): string =>
    isBitcoin()
      ? `You have ${balance} Bitcoin(s)`
      : `You have ${balance} Britas(s)`;

  const amount = getBalance();
  const title = getTitle();
  const subtitle = getSubtitle();

  return (
    <WalletTransaction
      balance={amount}
      title={title}
      subtitle={subtitle}
      currency={currency}
      callback={callback}
      loading={loading}
      quotations={quotations}
    />
  );
};
