import express from 'express';
import tokenGetAuth from '../controller/token/tokenGetAuth';

import register from '../controller/voter/register';
import vote from '../controller/voter/vote';

const voter = express.Router();

voter.post('/register',tokenGetAuth , register);
voter.post('/vote',tokenGetAuth , vote);


export default voter; 