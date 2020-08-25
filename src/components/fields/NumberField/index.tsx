import { FC, ReactElement } from 'react';
import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import { TextFieldProps } from '@material-ui/core/TextField';
import BaseInput from '../../inputs/BaseInput';

type NumberFieldProps = FieldProps<
  string,
  FieldRenderProps<string, HTMLElement>,
  HTMLElement
> &
  TextFieldProps;

export const decimalValue = (value): string | null => {
  if (!value) return null;
  return ((parseFloat(value.replace(',', '.').replace(' ', '')) * 100) / 100)
    .toFixed(2)
    .toString();
};

const NumberField: FC<NumberFieldProps> = (
  props: NumberFieldProps
): ReactElement => {
  return (
    <Field
      type="number"
      component={BaseInput}
      format={decimalValue}
      formatOnBlur
      {...props}
    />
  );
};

export default NumberField;
