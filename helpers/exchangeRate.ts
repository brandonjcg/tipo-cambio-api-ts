import EXCHANGE_RATE_DOLAR from '../constants';
import { ExchangeData } from '../interfaces/http.interface';

const getExchangeRateFromJson = (data: ExchangeData) => {
  if (!data) return null;

  const currencies = data.rss.channel.item;

  const dolar = currencies.find((currency) => currency.title === EXCHANGE_RATE_DOLAR);
  if (!dolar) return null;

  const {
    description: exchangeRate,
    pubDate: date,
  } = dolar;

  return {
    exchangeRate,
    date: new Date(date),
  };
};

export default getExchangeRateFromJson;
