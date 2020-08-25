import { ReactElement } from 'react';
import { render, cleanup } from '@testing-library/react';
import { Form } from 'react-final-form';
import TextField from './index';

afterEach(cleanup);

describe('<TextField />', (): void => {
  it('should render a Text field', (): void => {
    const { getByDisplayValue } = render(
      <Form onSubmit={(): void => {}} initialValues={{ nickname: 'john' }}>
        {(): ReactElement => <TextField name="nickname" />}
      </Form>
    );
    expect(getByDisplayValue('john')).toBeTruthy();
  });
});
