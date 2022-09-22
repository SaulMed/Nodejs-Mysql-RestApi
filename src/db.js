import { createPool } from 'mysql2/promise';
import {
    DB_HOST,
    DB_DATABASE,
    DB_PORT,
    DB_USER,
    DB_PW
} from './config.js';

export const pool = createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PW
});