import React, { ReactElement } from 'react';
import { FieldValidator } from 'final-form';

const minLength: FieldValidator<string> = (
  value: string
): ReactElement | undefined =>
  value && value.length >= 6 ? (
    undefined
  ) : (
    <span>{`This field must have at least 6 characters`}</span>
  );

export default minLength;
