import React, { FC, ReactElement } from 'react';
import {
  Field,
  FieldProps,
  FieldRenderProps
} from 'react-final-form';
import { TextFieldProps } from '@material-ui/core/TextField';
import BaseInput from '../../inputs/BaseInput';
import validateEmail from '../validation/validateEmail';

type EmailFieldProps = FieldProps<
  string,
  FieldRenderProps<string, HTMLElement>,
  HTMLElement
> &
  TextFieldProps;

const EmailField: FC<EmailFieldProps> = (
  props: EmailFieldProps
): ReactElement => {
  return <Field validate={validateEmail} component={BaseInput} {...props} />;
};

export default EmailField;
