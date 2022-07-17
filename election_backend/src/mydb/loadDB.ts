import { Sequelize } from 'sequelize';
import config from './config.json';
import env from '../loadEnv';

const sql = env.SQL;
let sqlConfig = config.localhost;//Default

// if (sql === 'stage') {
//   sqlConfig = config.stage;
// } else if (sql === 'prod') {
//   sqlConfig = config.prod;
// }

const mydb = new Sequelize(
  sqlConfig.database, sqlConfig.user, sqlConfig.password, {
    dialect: "mysql",
    host: sqlConfig.host,
    port: Number(sqlConfig.port),
    logging: false
  }
);

export default mydb;