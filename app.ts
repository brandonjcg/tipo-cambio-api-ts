import dotenv from 'dotenv';
import database from './database';
import Server from './models/server';

dotenv.config();

database.initialize();

const server = new Server();
server.listen();
