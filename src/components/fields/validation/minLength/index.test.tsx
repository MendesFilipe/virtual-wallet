import minLength from './index';

test('validateMinLength', (): void => {
  expect(minLength('456789', {})).toBeFalsy();
  expect(minLength('45678', {})).toBeTruthy();
});
