import express, { Application, Request, Response } from 'express';
import env from './loadEnv';
import voter from './routers/voter';
import manager from './routers/manager';
import {urlencoded} from 'body-parser';


const app: Application = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.listen(env.SERVER_PORT, () => {
  console.log(`process ${process.pid} Listening on port ${env.SERVER_PORT}!`);
});

app.all('/', async(_: Request, res: Response): Promise<Response> => {
  return res.status(200).json({
      status: 'success',
      message: 'Connected successfully!',
  })}
);

app.use('/voter', voter);
app.use('/manager', manager);
