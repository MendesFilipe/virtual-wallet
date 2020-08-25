import { ReactElement } from 'react';
import { render, cleanup } from '@testing-library/react';
import { Form } from 'react-final-form';
import NumberField from './index';

afterEach(cleanup);

describe('<NumberField />', (): void => {
  it('should render a Number field', (): void => {
    const { getByDisplayValue } = render(
      <Form onSubmit={(): void => {}} initialValues={{ number: '12344' }}>
        {(): ReactElement => <NumberField name="number" />}
      </Form>
    );
    expect(getByDisplayValue('12344')).toBeTruthy();
  });
});
