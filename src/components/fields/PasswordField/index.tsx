import { FC, ReactElement } from 'react';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import { TextFieldProps } from '@material-ui/core/TextField';
import BaseInput from '../../inputs/BaseInput';
import minLength from '../validation/minLength';

type PasswordFieldProps = FieldProps<
  string,
  FieldRenderProps<string, HTMLElement>,
  HTMLElement
> &
  TextFieldProps;

const PasswordField: FC<PasswordFieldProps> = (
  props: PasswordFieldProps
): ReactElement => {
  return (
    <Field
      validate={minLength}
      component={BaseInput}
      {...props}
      type="password"
    />
  );
};

export default PasswordField;
