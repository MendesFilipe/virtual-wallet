import { FC, ReactElement } from 'react';
import 'dayjs/locale/pt';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import { List, ListItem, ListItemText, Avatar } from '@material-ui/core';
import { Cash as CashIcon } from 'mdi-material-ui';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Transaction from '../../types/Transaction';
import currencyResources from '../../utils/currencyResources';
import Currencies from '../../enums/Currencies';
import decimalValue from '../../utils/decimalValue';

dayjs.extend(LocalizedFormat);
dayjs.locale('pt');

const useStyles = makeStyles((theme: Theme) => {
  return {
    listItem: {
      backgroundColor: '#fff',
      marginBottom: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    nameBold:{
      fontWeight: "bold",
      marginLeft: theme.spacing() - 4,
      marginRight: theme.spacing() - 4
    },
    classAvatar:{
      backgroundColor: '#1cb34b'
    }
  };
});

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: FC<TransactionsListProps> = ({
  transactions
}): ReactElement => {
  const classes = useStyles();

  return (
    <List>
      {transactions.map(({ bought, selled, transactionDate }) => {
        const boughtName = currencyResources[
          bought.currency
        ].namePlural.toLowerCase();

        const selledName = currencyResources[
          selled.currency
        ].namePlural.toLowerCase();

        const formattedDate = dayjs(transactionDate).format('LLL');
        const primaryText =
          bought.currency !== Currencies.REAL ? (
            <>
              You bought{' '}
              <span className={classes.nameBold}>{decimalValue(bought.amount)}</span>
              <span className={classes.nameBold}>{boughtName}</span> with
              <span className={classes.nameBold}>{decimalValue(selled.amount)}</span>
              <span>{selledName}</span>
            </>
          ) : (
            <>
              You sold{' '}
              <span className={classes.nameBold}>{decimalValue(selled.amount)} </span>
              <span className={classes.nameBold}>{selledName}</span> per
              <span className={classes.nameBold}>{decimalValue(bought.amount)}</span>
              <span>{boughtName}</span>
            </>
          );

        return (
          <ListItem className={classes.listItem}>
              <Avatar className={classes.classAvatar}>
                <CashIcon />
              </Avatar>
            <ListItemText style={{marginLeft: 16}} primary={primaryText} secondary={formattedDate} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default TransactionsList;
