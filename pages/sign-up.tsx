import { FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import SignUpForm from '../src/components/forms/SignUpForm';
import { addUser } from '../src/store/ducks/user/actions';
import { toast } from 'react-toastify';
import { UserState } from 'store/ducks/user/types';
import Grid from '@material-ui/core/Grid';


const SignUp: FC<{}> = (): ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { users } = useSelector(state => state.users) as UserState;

  const onSubmit = formValues => {
    try {
      const { name, email, password, confirmPassword } = formValues;
      if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
      } else if (users.find(user => user.email === email)) {
        toast.warn(`${email} already have a registration! `);
      } else {
        const newUser = {
          name,
          email,
          password,
          isAuthenticated: false,
          balance: [100000, 0, 0]
        };
        dispatch(addUser(newUser));
        toast.success('Your registration was successful!');
        setTimeout(() => {
          router.push('/login');
        }, 800);
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
   <SignUpForm onSubmit={onSubmit} />
  </Grid>

  );
};

export default SignUp;
