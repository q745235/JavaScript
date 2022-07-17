import dotenv from 'dotenv';
dotenv.config();

const {
    SERVER_PORT, SQL
} = process.env;

if (
    !(
        SQL == 'localhost'||
        SQL == 'stage' ||
        SQL == 'prod'
    )
) {
    throw new Error(`The env 'SQL' is incorrect`);
}

export default {
    SQL: SQL,
    SERVER_PORT: <number>(SERVER_PORT || 3000),
}