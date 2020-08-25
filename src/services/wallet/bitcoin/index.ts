import Wallet from '../../../types/Wallet';

export const ENDPOINT = 'https://www.mercadobitcoin.net/api/BTC/ticker/';

const getBitcoinValue = async (): Promise<Pick<
Wallet,
  'buy' | 'sell'
>> => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    const {
      ticker: { buy, sell }
    } = data;

    return { buy, sell };
  } catch (error) {
    return { buy: 0, sell: 0 };
  }
};

export default getBitcoinValue;
