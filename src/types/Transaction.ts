interface Transaction {
  userEmail: string;
  transactionDate: Date;
  bought: {
    currency: number;
    amount: number;
  };
  selled: {
    currency: number;
    amount: number;
  };
}

export default Transaction;
