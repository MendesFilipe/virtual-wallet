import BaseDialog, { BaseDialogProps } from '../BaseDialog';
import { useDispatch } from 'react-redux';
import { FC, ReactElement, useContext } from 'react';
import BuyForm from '../../forms/BuyForm';
import Currencies from '../../../enums/Currencies';
import numberToString from '../../../utils/numberToString';
import WalletContext, {
  ContextProps
} from '../../../api/wallet/WalletContext';
import { buy, sell } from '../../../store/ducks/user/actions';
import { addTransaction } from '../../../store/ducks/transactions/actions';
import Transaction from '../../../types/Transaction';
import { toast } from 'react-toastify';
import decimalValue from '../../../utils/decimalValue';

interface CustomProps {
  currency: Currencies;
  balance: number[];
  userEmail: string;
}

type BuyDialogContentProps = Pick<BaseDialogProps, 'open' | 'handleClose'> &
  CustomProps;

const BuyDialogContent: FC<BuyDialogContentProps> = (
  props: BuyDialogContentProps
): ReactElement | null => {
  const { open, handleClose, currency, balance, userEmail } = props;

  if (!currency) return null;

  const title = `Buy ${
    currency === Currencies.BITCOIN ? 'Bitcoins' : 'Britas'
  }`;

  const { getWalletByCurrency } = useContext<ContextProps>(
    WalletContext
  );
  const dispatch = useDispatch();

  const submit = formValues => {
    const { quantity, withCurrency } = formValues;
    const formattedQuantity = decimalValue(parseFloat(quantity));
    const bought = numberToString(formattedQuantity as string);
    const sellQuotation = getWalletByCurrency(currency).sell;
    const boughtQuotation = getWalletByCurrency(withCurrency).buy;
    const price = (sellQuotation as number) * bought;
    const spent = price / (boughtQuotation as number);
    const maxPrice =
      getWalletByCurrency(withCurrency).sell * balance[withCurrency];
    const maxAmount = maxPrice / sellQuotation;

    if (balance[withCurrency] - spent < 0) {
      toast.error(
        `You don't have enough balance. The most you can buy is ${decimalValue(
          maxAmount
        )}`
      );
      return;
    }

    const transaction: Transaction = {
      userEmail,
      transactionDate: new Date(),
      bought: {
        currency,
        amount: bought
      },
      selled: {
        currency: withCurrency,
        amount: spent
      }
    };
    dispatch(buy(userEmail, bought, currency));
    dispatch(sell(userEmail, spent, withCurrency));
    dispatch(addTransaction(transaction));
  };

  return (
    <BaseDialog open={open} title={title} handleClose={handleClose}>
      <BuyForm onSubmit={submit} currency={currency} />
    </BaseDialog>
  );
};
export default BuyDialogContent;
