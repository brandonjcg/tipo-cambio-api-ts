import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import ExchangeRate from './classes/ExchangeRate';

dotenv.config();

const database = process.env.DB_NAME ?? '';
const username = process.env.DB_USER ?? '';
const password = process.env.DB_PASSWORD ?? '';
const host = process.env.DB_HOST ?? '';
const port = process.env.DB_PORT ?? 3306;
const logging = process.env.DB_LOGGING ?? false;

export default new DataSource({
  type: 'mysql',
  host,
  port: Number(port),
  username,
  password,
  database,
  entities: [ExchangeRate],
  synchronize: false,
  logging: Boolean(logging),
});
