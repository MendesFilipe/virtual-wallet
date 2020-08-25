import { ThemeProvider } from '@material-ui/styles';
import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from 'theme';
import BaseInput from './BaseInput';
import mockFieldRenderProps from './BaseInput/mockFieldRenderProps';

storiesOf('Inputs', module)
    .addDecorator(muiTheme([theme]))
    .add(
        'Base Input',
        (): ReactElement => (
            <ThemeProvider theme={theme}>
                <BaseInput {...mockFieldRenderProps} />
            </ThemeProvider>
        )
    );
