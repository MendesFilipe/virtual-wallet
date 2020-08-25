import { FC, ReactElement } from 'react';
import BaseForm from '../BaseForm';
import { FormProps } from 'react-final-form';
import {
  Card,
  CardContent,
  Grid,
  Button,
  Link as MuiLink,
  makeStyles,
  Theme
} from '@material-ui/core';
import Link from 'next/link';
import EmailField from '../../fields/EmailField';
import PasswordField from '../../fields/PasswordField';

const useStyles = makeStyles((theme: Theme) => {
  return {
    cardSignUP: {
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

const SignUpForm: FC<FormProps> = ({ onSubmit }): ReactElement => {
  const classes = useStyles();
  return (
    <BaseForm onSubmit={onSubmit}>
      {({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card className={classes.cardSignUP}>
              <img style={{width:200, borderBottom:"2px solid #1cb34b"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Stone_pagamentos.png/1280px-Stone_pagamentos.png" alt="Logo"/>	
              <CardContent>
                <Grid container spacing={3} direction="column">
                  <Grid item xs={12} sm={12}>
                    <EmailField required name="email" label="Email" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <PasswordField required name="password" label="Password" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <PasswordField
                      required
                      name="confirmPassword"
                      label="Password Confirm"
                      fullWidth
                    />
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
                  Sign Up
                </Button>
              <Link href="/login">
                <MuiLink component="button" variant="body2" color="secondary">
                  Already have an account? Login
                </MuiLink>
              </Link>
            </Card>
          </form>
        );
      }}
    </BaseForm>
  );
};

export default SignUpForm;
