import Wallet from '../../../types/Wallet';
import dayjs from 'dayjs';

export const endpoint = (initial: string, final: string) =>
  `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${initial}'&@dataFinalCotacao='${final}'&$top=100&$format=json`;

const getDollarValue = async (): Promise<Pick<
Wallet,
  'buy' | 'sell'
>> => {
  try {
    const format = 'MM-DD-YYYY';
    const today = new Date();
    const final = dayjs(today).subtract(1, 'day');
    const initial = final.subtract(7, 'day');

    final.format(format);
    initial.format(format);

    const response = await fetch(
      endpoint(initial.format(format), final.format(format))
    );
    const data = await response.json();
    const { cotacaoCompra: buy, cotacaoVenda: sell } = data.value[0];
    return { buy, sell };
  } catch (error) {
    return { buy: 0, sell: 0 };
  }
};

export default getDollarValue;
