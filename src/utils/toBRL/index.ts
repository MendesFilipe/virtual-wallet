const toBRL = (value: number): string => {
  try {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  } catch (error) {
    return 'R$0.00';
  }
};

export default toBRL;
