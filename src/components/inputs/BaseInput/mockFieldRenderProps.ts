import { BaseInputProps } from './index';

const mockFieldRenderProps: BaseInputProps = {
    input: {
        onBlur: (): void => {},
        onChange: (): void => {},
        onFocus: (): void => {},
        name: 'Test',
        value: 'Hello world'
    },
    meta: {
        error: undefined,
        touched: false
    },
    helperText: 'Helper Text',
    label: 'Base Input'
};

export default mockFieldRenderProps;
