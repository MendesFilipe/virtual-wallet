import { FC, ReactElement } from 'react';
import BaseForm from '../BaseForm';
import { FormProps } from 'react-final-form';
import {
  Card,
  CardContent,
  Grid,
  Button,
  makeStyles,
  Theme,
  Link as MuiLink
} from '@material-ui/core';
import Link from 'next/link';
import EmailField from '../../fields/EmailField';
import PasswordField from '../../fields/PasswordField';

const useStyles = makeStyles((theme: Theme) => {
  return {
    cardLogin: {
      textAlign: "center",
      padding: theme.spacing(3),
      borderRadius: 0,
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(6),
        minWidth: theme.spacing() * 62
      }
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    }
  };
});

const LoginForm: FC<FormProps> = ({ onSubmit }): ReactElement => {
  const classes = useStyles();
  return (
    <BaseForm onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card className={classes.cardLogin}>
              <CardContent>
                <img style={{width:200, borderBottom:"2px solid #1cb34b"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Stone_pagamentos.png/1280px-Stone_pagamentos.png" alt="Logo"/>	
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12} sm={12}>
                    <EmailField required name="email" label="Email" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <PasswordField required name="password" label="Password" fullWidth />
                  </Grid>
                </Grid>
              </CardContent>
                <Button
                  color="secondary"
                  type="submit"
                  variant="contained"
                  fullWidth 
                  className={classes.submit}
                  disabled={submitting}
                >
                  Login
                </Button>
                <Link href="/sign-up">
                  <MuiLink component="button" variant="body2" color="secondary">
                  Don&apos;t have an account? Sign Up
                  </MuiLink>
                </Link>
            </Card>
          </form>
        );
      }}
    </BaseForm>
  );
};

export default LoginForm;
