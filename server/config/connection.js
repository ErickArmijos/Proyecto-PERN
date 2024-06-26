import { Sequelize } from "sequelize";
import 'dotenv/config'
const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const server = process.env.DB_SERVER;

const sequelize = new Sequelize(database,username,password,{
    host:process.env.DB_SERVER,
    dialect: 'postgres'
})

export default sequelize;