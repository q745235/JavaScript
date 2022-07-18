import express from 'express';
import tokenGetAuth from '../controller/token/tokenGetAuth';
import sendToken from '../controller/token/sendToken';

import register from '../controller/voter/register';
import vote from '../controller/voter/vote';
import login from '../controller/voter/login';

const voter = express.Router();


voter.post('/register',tokenGetAuth , register);
voter.post('/vote',tokenGetAuth , vote);
voter.post('/login',login , sendToken);


export default voter; 