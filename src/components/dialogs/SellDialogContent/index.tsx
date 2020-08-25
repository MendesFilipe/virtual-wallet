import BaseDialog, { BaseDialogProps } from '../BaseDialog';
import { FC, ReactElement, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Currencies from '../../../enums/Currencies';
import Transaction from '../../../types/Transaction';
import SellForm from '../../forms/SellForm';
import numberToString from '../../../utils/numberToString';
import WalletContext, {
  ContextProps
} from '../../../api/wallet/WalletContext';
import { buy, sell } from '../../../store/ducks/user/actions';
import { addTransaction } from '../../../store/ducks/transactions/actions';
import decimalValue from '../../../utils/decimalValue';

interface CustomProps {
  currency: Currencies;
  balance: number;
  userEmail: string;
}

type SellDialogContentProps = Pick<BaseDialogProps, 'open' | 'handleClose'> &
  CustomProps;

const SellDialogContent: FC<SellDialogContentProps> = (
  props: SellDialogContentProps
): ReactElement | null => {
  const { open, handleClose, currency, balance, userEmail } = props;
  const { getWalletByCurrency } = useContext<ContextProps>(
    WalletContext
  );
  const dispatch = useDispatch();
  if (!currency) return null;
  const title = `Vender ${
    currency === Currencies.BITCOIN ? 'Bitcoins' : 'Britas'
  }`;

  const onSubmit = formValues => {
    const { quantity } = formValues;
    const formattedQuantity = decimalValue(parseFloat(quantity));
    const amount = numberToString(formattedQuantity as string);
    const selled = amount * getWalletByCurrency(currency).buy;
    if (balance - amount < 0) {
      toast.error(
        `You don't have enough balance. You can sell at most ${decimalValue(
          balance
        )}`
      );
      return;
    }
    const transaction: Transaction = {
      userEmail,
      transactionDate: new Date(),
      bought: {
        currency: Currencies.REAL,
        amount: selled
      },
      selled: {
        currency,
        amount
      }
    };
    dispatch(buy(userEmail, selled, Currencies.REAL));
    dispatch(sell(userEmail, amount, currency));
    dispatch(addTransaction(transaction));
  };

  return (
    <BaseDialog open={open} title={title} handleClose={handleClose}>
      <SellForm onSubmit={onSubmit} currency={currency} />
    </BaseDialog>
  );
};
export default SellDialogContent;
