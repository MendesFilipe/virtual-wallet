import { storiesOf } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from 'theme';
import { ThemeProvider } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import BuyDialogContent from './BuyDialogContent';
import Currencies from 'enums/Currencies';
import SellDialogContent from './SellDialogContent';

storiesOf('Dialogs', module)
  .addDecorator(muiTheme([theme]))
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add(
    'Buy Dialog',
    (): ReactElement => {
      const [open, setOpen] = useState(false);
      const handleClose = () => setOpen(!open);
      return (
        <ThemeProvider theme={theme}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => handleClose()}
          >
            Open buy dialog
          </Button>
          <BuyDialogContent
            open={open}
            handleClose={handleClose}
            currency={Currencies.BITCOIN}
            userEmail="user@host.com"
            balance={[10000, 0, 0]}
          />
        </ThemeProvider>
      );
    }
  )
  .add(
    'Sell Dialog',
    (): ReactElement => {
      const [open, setOpen] = useState(false);
      const handleClose = () => setOpen(!open);
      return (
        <ThemeProvider theme={theme}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => handleClose()}
          >
            Open sell dialog
          </Button>
          <SellDialogContent
            open={open}
            handleClose={handleClose}
            currency={Currencies.BRITA}
            userEmail="user@host.com"
            balance={10000}
          />
        </ThemeProvider>
      );
    }
  );
