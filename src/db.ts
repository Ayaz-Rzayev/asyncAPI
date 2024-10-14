import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DB_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DB_PASS,
  })
  .promise();

export default pool;
