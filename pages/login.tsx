import { FC, ReactElement } from 'react';
import LoginForm from '../src/components/forms/LoginForm';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import User from 'types/User';
import { login } from '../src/store/ducks/user/actions';
import { UserState } from 'store/ducks/user/types';
import Grid from '@material-ui/core/Grid';


const Login: FC<{}> = (): ReactElement | null => {
  const { users } = useSelector(state => state.users) as UserState;
  const hasUserAuthenticated = useSelector(state => {
    const { users } = state.users as UserState;
    return users.find(user => user.isAuthenticated === true);
  }) as User;
  const dispatch = useDispatch();
  const router = useRouter();

  if (hasUserAuthenticated) {
    router.push('/');
    return null;
  }

  const onSubmit = formValues => {
    try {
      const { email, password } = formValues;
      const hasUser = users.find(user => user.email === email);
      if (!hasUser) {
        toast.error(`${email} does not have access to the platform.`);
      } else if (password !== hasUser.password) {
        toast.error('Incorrect password!');
      } else {
        dispatch(login(email));
      }
    } catch (error) {
      toast.error('An unexpected failure has occurred. Try again!');
    }
  };

  return (

    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <LoginForm onSubmit={onSubmit} />
    </Grid>

  );
};

export default Login;
