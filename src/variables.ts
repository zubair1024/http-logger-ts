import dotenv from "dotenv";
dotenv.config();

export const variables = {
  DB_URL: process.env.DB_URL,
  PORT: 3030,
};
