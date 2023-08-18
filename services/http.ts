import axios from 'axios';

const getExchangeRateFromDof = async () => {
  const response = await axios.get(
    'https://www.dof.gob.mx/indicadores.xml',
  );

  return response.data;
};

export default getExchangeRateFromDof;
