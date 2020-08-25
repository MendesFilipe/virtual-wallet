import { initialState } from './index';
import { cleanup } from '@testing-library/react';

beforeEach(cleanup);

describe('transactions reducer', () => {
  it('should handle with INITIAL_STATE', () => {
    const expectedState = {
      transactions: []
    };
    expect(initialState).toEqual(expectedState);
  });
});
