import required from './index';
import { cleanup } from '@testing-library/react';

beforeEach(cleanup);

test('should validate a required field', (): void => {
  expect(required('', {})).toBeTruthy();
  expect(required('   ', {})).toBeTruthy();
  expect(required(null, {})).toBeTruthy();
  expect(required(undefined, {})).toBeTruthy();
});
