// @ts-nocheck
import { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Creators from '../src/store/ducks/user/actions';
import { useRouter } from 'next/router';
import User from 'types/User';
import { Theme, CircularProgress, Fab, Grid, Paper   } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import toBRL from '../src/utils/toBRL';
import WalletContainer from '../src/components/WalletContainer';
import Currencies from '../src/enums/Currencies';
import { UserState } from 'store/ducks/user/types';
import BuyDialogContent from '../src/components/dialogs/BuyDialogContent';
import SellDialogContent from '../src/components/dialogs/SellDialogContent';
import { TransactionState } from 'store/ducks/transactions/types';
import Transaction from 'types/Transaction';
import TransactionsList from '../src/components/TransactionsList';
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
      position: 'relative',
      padding: theme.spacing(5),
      [theme.breakpoints.up('sm')]: {
        transform: 'translateY(0%)'
      }
    },
    circular: {
      display: 'flex',
      position: 'relative',
      transform: 'translateY(100%)',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-around'
      }
    },
    balance:{
      fontSize: '1.5em',
      fontWeight: 600,
      marginBottom: theme.spacing() + 42,
      marginTop: theme.spacing() + 11
    },
    transactions: {
      flex: '0 0 60%'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    fabExit:{
      position: 'fixed',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        bottom: 0,
        top: theme.spacing()
      }
    }
  };
});

const Index: FC<{}> = (): ReactElement | null => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [dialogBuy, setDialogBuy] = useState();
  const [dialogSell, setDialogSell] = useState();

  const user = useSelector(state => {
    const { users } = state.users as UserState;
    return users.find(user => user.isAuthenticated === true);
  }) as User;

  const userTransactions = useSelector(state => {
    const { transactions } = state.transactions as TransactionState;
    return !user || !transactions
      ? []
      : transactions.filter(
          transaction => transaction.userEmail === user.email
        );
  });

  const classes = useStyles();

  const logout = () => {
    dispatch(Creators.logout());
  };

  if (!user) {
    router.push('/login');
    return (
      <div className={classes.circular}>
        <CircularProgress color={'secondary'} />
      </div>
    );
  }

  const callback = {
    buy: (currency: Currencies) => () => setDialogBuy(currency),
    sell: (currency: Currencies) => () => setDialogSell(currency)
  };

  const { balance, email } = user;
  const { REAL, BITCOIN, BRITA } = Currencies;
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <img style={{width:200, borderBottom:'2px solid #1cb34b'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Stone_pagamentos.png/1280px-Stone_pagamentos.png" alt="Logo"/>
              <div className={classes.balance}>
                Balance: {toBRL(balance[REAL])}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <WalletContainer
              currency={BITCOIN}
              callback={callback}
              balance={balance[BITCOIN]}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <WalletContainer
              currency={BRITA}
              callback={callback}
              balance={balance[BRITA]}
            />
          </Grid>

            <BuyDialogContent
              open={Boolean(dialogBuy)}
              handleClose={() => setDialogBuy(undefined)}
              currency={dialogBuy}
              userEmail={email}
              balance={balance}
            />
            <SellDialogContent
              open={Boolean(dialogSell)}
              handleClose={() => setDialogSell(undefined)}
              currency={dialogSell}
              userEmail={email}
              balance={balance[dialogSell]}
            />
            <Grid item xs={12}>
              <div className={classes.transactions}>
                {(userTransactions as Transaction[]).length === 0 ? (
                  undefined
                ) : (
                  <TransactionsList
                    transactions={(userTransactions as Transaction[]).reverse()}
                  />
                )}
              </div> 
            </Grid>
          </Grid>
        </div>
        <Fab color="secondary" aria-label="exit" className={classes.fabExit} onClick={()=> {logout()}}>
          <ExitToApp />
        </Fab>
    </>
  );
};

export default Index;
