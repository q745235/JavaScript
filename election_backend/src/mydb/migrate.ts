import {Sequelize} from 'sequelize';
import mydb from './index';

export async function syncAll(): Promise<Sequelize>{
    return mydb.sync({ alter: true });
}

export async function forceSyncAll(): Promise<Sequelize>{
    return mydb.sync({ force: true });
}
