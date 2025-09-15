import { createPool } from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    // connectionLimit: 10,
});

export default pool;