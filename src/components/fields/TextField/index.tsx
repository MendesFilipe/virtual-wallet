import { FC, ReactElement } from 'react';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import { TextFieldProps } from '@material-ui/core/TextField';
import BaseInput from '../../inputs/BaseInput';

type CustomTextFieldProps = FieldProps<
  string,
  FieldRenderProps<string, HTMLElement>,
  HTMLElement
> &
  TextFieldProps;

const TextField: FC<CustomTextFieldProps> = (
  props: CustomTextFieldProps
): ReactElement => {
  return <Field component={BaseInput} {...props} />;
};

export default TextField;
