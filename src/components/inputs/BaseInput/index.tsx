import React, { FC, ReactElement } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { FieldRenderProps } from 'react-final-form';

export type BaseInputProps = FieldRenderProps<string, HTMLElement> &
  TextFieldProps;

const BaseInput: FC<BaseInputProps> = (props: BaseInputProps): ReactElement => {
  const { input, meta, helperText, ...restProps } = props;
  const { error, touched } = meta;
  const errorHelperText = touched && error;
  return (
    <TextField
      {...input}
      {...restProps}
      error={Boolean(touched && error)}
      helperText={errorHelperText || helperText}
      variant="outlined"
      margin="normal"
      color="secondary"
    />
  );
};

export default BaseInput;
