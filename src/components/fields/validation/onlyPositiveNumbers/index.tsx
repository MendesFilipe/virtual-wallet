import React, { ReactElement } from 'react';
import { FieldValidator } from 'final-form';

const onlyPositiveNumbers: FieldValidator<string> = (
  value: string
): ReactElement | undefined =>
  value && parseFloat(value) > 0 ? (
    undefined
  ) : (
    <span>{`Value must be greater than zero`}</span>
  );

export default onlyPositiveNumbers;
