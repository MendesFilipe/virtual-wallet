import onlyPositiveNumbers from './index';

test('onlyPositiveNumbers', (): void => {
  expect(onlyPositiveNumbers('1', {})).toBeFalsy();
  expect(onlyPositiveNumbers('-1', {})).toBeTruthy();
});
