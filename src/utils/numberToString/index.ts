export default (numberString: string) => {
  const [integer, fraction] = numberString.split(',');
  const formatedInteger = integer.split('.').join('');
  return +[formatedInteger, fraction].join('.');
};
