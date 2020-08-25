import React, { ReactElement } from 'react';
import { FieldValidator } from 'final-form';

const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

const validateEmail: FieldValidator<string> = (
  value: string
): ReactElement | undefined =>
  regex.test(value) ? undefined : <span>Invalid email address</span>;

export default validateEmail;
