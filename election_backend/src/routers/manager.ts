import express from 'express';
import tokenGetManagerAuth from '../controller/token/tokenGetManagerAuth';

import getVotes from '../controller/manager/getVotes';
import getVoterList from '../controller/manager/getVoterList';
import getWinner from '../controller/manager/getWinner';

import startElection from '../controller/manager/startElection';
import endElection from '../controller/manager/endElection';
import addCandidate from '../controller/manager/addCandidate';
import sendEmail from '../controller/manager/sendEmail';
import newElection from '../controller/manager/newElection';

const manager = express.Router();

manager.get("/votes", tokenGetManagerAuth, getVotes);
manager.get("/voterList", tokenGetManagerAuth, getVoterList);
manager.get("/winner", tokenGetManagerAuth, getWinner);

manager.post("/candidate", tokenGetManagerAuth, addCandidate);
manager.post("/email", tokenGetManagerAuth, sendEmail);
manager.post("/election", tokenGetManagerAuth, newElection);

manager.put("/election", tokenGetManagerAuth, startElection);
manager.put("/endElection", tokenGetManagerAuth, endElection);
export default manager;