import React, { FC, ReactElement } from 'react';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import { TextFieldProps } from '@material-ui/core/TextField';
import BaseInput from '../../inputs/BaseInput';

type SelectFieldProps = FieldProps<
  string,
  FieldRenderProps<string, HTMLElement>,
  HTMLElement
> &
  TextFieldProps;

const SelectField: FC<SelectFieldProps> = (
  props: SelectFieldProps
): ReactElement => {
  return <Field select component={BaseInput} {...props} />;
};

export default SelectField;
