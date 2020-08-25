import React from 'react';
import { cleanup, render } from '@testing-library/react';
import BaseInput from './index';
import mockFieldRenderProps from './mockFieldRenderProps';

afterEach(cleanup);

describe('<BaseInput />', (): void => {
    it('should render a field', (): void => {
        const { getByDisplayValue } = render(
            <BaseInput {...mockFieldRenderProps} />
        );

        expect(getByDisplayValue('Hello world')).toBeTruthy();
    });

    it('should display the helper text', (): void => {
        const { getByText } = render(<BaseInput {...mockFieldRenderProps} />);

        expect(getByText('Helper Text')).toBeTruthy();
    });

    it('should display error text', (): void => {
        const mockFieldRenderPropsWithError = {
            ...mockFieldRenderProps,
            meta: { error: 'Teste', touched: true }
        };

        const { getByText } = render(
            <BaseInput {...mockFieldRenderPropsWithError} />
        );

        expect(getByText('Teste')).toBeTruthy();
    });
});
