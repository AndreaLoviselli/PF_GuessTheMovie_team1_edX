import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "gtm_movies",
  username: "root",
  password: "andreaSQL6064",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
