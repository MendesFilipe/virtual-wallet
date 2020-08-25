import { ReactElement } from 'react';
import { render, cleanup } from '@testing-library/react';
import { Form } from 'react-final-form';
import SelectField from './index';
import { MenuItem } from '@material-ui/core';

afterEach(cleanup);

describe('<SelectField />', (): void => {
  it('should render a Select field', (): void => {
    const items: string[] = ['item 1', 'item 2', 'item 3'];

    const { getByDisplayValue } = render(
      <Form onSubmit={(): void => {}} initialValues={{ items: items[2] }}>
        {(): ReactElement => {
          return (
            <SelectField name="items">
              {items.map(item => {
                return (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </SelectField>
          );
        }}
      </Form>
    );
    expect(getByDisplayValue('item 3')).toBeTruthy();
  });
});
