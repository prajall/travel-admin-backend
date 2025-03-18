import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;

if (!dbName || !dbPassword) {
  console.error(
    "Exiting... Basic environmet variables missing: DB_NAME / DB_PASSWORD"
  );
  process.exit(1);
}

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: "postgres",
  port: Number(process.env.DB_PORT) || 5432,
  password: dbPassword,
  database: dbName,
});

pool
  .connect()
  .then(() => {
    console.log("PostgreSQL connected successfully");
    //initialize database with db,tables,schemas
    // initializeDB();
  })
  .catch((err: any) => {
    console.log("Error Connecting to PostgreSQL database", err);
  });

const initializeDB = async () => {
  //check if database already exists
  const dbExists = await pool.query(
    `SELECT 1 from pg_database WHERE datname=$1;`,
    [dbName]
  );
  if (dbExists.rows.length === 0) {
    //create database
    console.log("Database with this name does not exist");
    process.exit(1);
  }
};

export default pool;
