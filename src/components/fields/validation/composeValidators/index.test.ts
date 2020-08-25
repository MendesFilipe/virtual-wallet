import composeValidators from './index';

test('composeValidators', (): void => {
  const validator = (bool: boolean): string | undefined =>
    bool ? undefined : 'validator';
  const anotherValidator = (bool: boolean): string | undefined =>
    !bool ? undefined : 'anotherValidator';

  expect(composeValidators(validator, anotherValidator)(true)).toEqual(
    'anotherValidator'
  );
  expect(composeValidators(validator, anotherValidator)(false)).toEqual(
    'validator'
  );
});
