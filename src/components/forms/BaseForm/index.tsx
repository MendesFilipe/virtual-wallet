import React, { FC, ReactElement } from 'react';
import { Form, FormProps, FormRenderProps } from 'react-final-form';
import createDecorator from 'final-form-focus';

interface BaseFormProps extends FormProps {
  children(props: FormRenderProps): ReactElement;
}
const focusOnErrors = createDecorator();
const BaseForm: FC<BaseFormProps> = (props): ReactElement => {
  const { onSubmit, initialValues, children } = props;
  return (
    <Form
      onSubmit={onSubmit}
      decorators={[focusOnErrors]}
      initialValues={initialValues || undefined}
    >
      {({
        handleSubmit,
        pristine,
        invalid,
        submitting,
        ...restArgs
      }): ReactElement => {
        return children({
          handleSubmit,
          pristine,
          invalid,
          submitting,
          ...restArgs
        });
      }}
    </Form>
  );
};
export default BaseForm;
