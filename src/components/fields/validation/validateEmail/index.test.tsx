import validateEmail from './index';

test('validateEmail', (): void => {
  expect(validateEmail('test@host.com', {})).toBeFalsy();
  expect(validateEmail('test', {})).toBeTruthy();
});
