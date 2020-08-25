import { ReactElement } from 'react';
import { FieldValidator } from 'final-form';

type requiredType = string | undefined | null;

const required: FieldValidator<requiredType> = (value: requiredType) =>
  !value || value.trim() === '' ? <span>Required field</span> : undefined;

export default required;
