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

manager.get("/getVotes", tokenGetManagerAuth, getVotes);
manager.get("/getVoterList", tokenGetManagerAuth, getVoterList);
manager.get("/getWinner", tokenGetManagerAuth, getWinner);

manager.post("/startElection", tokenGetManagerAuth, startElection);
manager.post("/endElection", tokenGetManagerAuth, endElection);
manager.post("/addCandidate", tokenGetManagerAuth, addCandidate);
manager.post("/sendEmail", tokenGetManagerAuth, sendEmail);
manager.post("/newElection", tokenGetManagerAuth, newElection);

export default manager;