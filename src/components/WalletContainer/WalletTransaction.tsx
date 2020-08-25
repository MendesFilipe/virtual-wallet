import { FC, ReactElement, SyntheticEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Card, CardContent, CardActions,  Button } from '@material-ui/core';
import { Bitcoin, Diamond } from 'mdi-material-ui';
import Currencies from '../../enums/Currencies';

const useStyles = makeStyles(theme => {
  return {
    title: {
      fontSize: '2em',
      fontWeight: 'bold',
      color: 'black',
      margin: theme.spacing(1, 0)
    },
    subTitle:{
      margin: theme.spacing(1, 0)
    },
    actionsButtons: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(),
      marginTop: theme.spacing(),
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: theme.spacing()
      }
    },
    actionBuy: {
      color: '#fff',
      flex: '0 0 33%',
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing()
      }
    },
    actionShell:{
      color: '#fff',
      flex: '0 0 33%',
      backgroundColor: "#64B9E3",
      '&:hover': {
        backgroundColor: '#1e92a9'
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '0 !important'
      }
    },
    avatarClass:{
      backgroundColor: '#1cb34b',
      position: "relative",
      marginRight: theme.spacing() + 2,
      marginTop: theme.spacing()
    },
    avatarDiv:{
      display:"flex"
    }
  };
});

export interface WalletTransactionProps {
  title: string;
  balance: string;
  subtitle: string;
  currency: Currencies;
  loading: boolean;
  callback: {
    sell: (currency: Currencies) => (e: SyntheticEvent) => any;
    buy: (currency: Currencies) => (e: SyntheticEvent) => any;
  };
  quotations: {
    buy: string;
    sell: string;
  };
}

const WalletTransaction: FC<WalletTransactionProps> = ({
  title,
  balance,
  subtitle,
  currency,
  loading,
  callback
}): ReactElement => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        {title === 'BITCOIN'? (
        <div className={classes.avatarDiv}>
          <Avatar className={classes.avatarClass}>
            <Bitcoin/>
          </Avatar>
          <h1 className={classes.title}>Bitcoin</h1>
        </div>) :
        (
        <div className={classes.avatarDiv}>
          <Avatar className={classes.avatarClass}>
            <Diamond/>
          </Avatar>
          <h1 className={classes.title}>Brita</h1>
        </div>)}
        <h3 className={classes.title}>
          {balance}
        </h3>
        <p className={classes.subTitle}>{subtitle}</p>

      </CardContent>
      <CardActions className={classes.actionsButtons}>
        <Button
          variant="contained" 
          color="primary"
          fullWidth 
          className={classes.actionBuy}
          disabled={loading}
          onClick={callback.buy(currency)}
        >
          Buy
        </Button>
        <Button
          variant="contained" 
          fullWidth 
          className={classes.actionShell}
          disabled={loading}
          onClick={callback.sell(currency)}
        >
          Sell
        </Button>
      </CardActions>
    </Card>
  );
};

export default WalletTransaction;
