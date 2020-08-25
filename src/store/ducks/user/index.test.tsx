import  { initialState } from './index';
import { cleanup } from '@testing-library/react';

beforeEach(cleanup);

describe('users reducer', () => {
  it('should handle with INITIAL_STATE', () => {
    const expectedState = {
      users: []
    };
    expect(initialState).toEqual(expectedState);
  });
});
