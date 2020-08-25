import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import store, { persistor } from '../src/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WalletAPI from '../src/api/wallet';

class MyApp extends App {
  componentDidMount() {
    toast.configure();
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Desafio Stone</title>
        </Head>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <WalletAPI>
                <Component {...pageProps} />
              </WalletAPI>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </>
    );
  }
}
export default MyApp;
