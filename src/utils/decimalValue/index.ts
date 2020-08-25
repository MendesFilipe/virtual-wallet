const decimalValue = (value: number, fractionDigits: number = 2): string => {
  try {
    return value.toLocaleString('pt-BR', {
      currency: 'BRL',
      minimumFractionDigits: fractionDigits
    });
  } catch (error) {
    return '0';
  }
};

export default decimalValue;
