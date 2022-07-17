import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import getAllVoterEmail from '../../services/manager/getAllVoterEmail';
import getWinner from '../../services/manager/getWinner';
import getVotes from '../../services/manager/getVotes';
import nodemailer from '../../services/manager/nodemailer';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName} = req.body;
  try {
    await mydb.transaction(async (t) => {
      const r = await getWinner(t,electionName);
      const voters = await getAllVoterEmail(t,electionName);
      const score = await getVotes(t,electionName);
      for(let i = 0; i < voters.length; i++){
        sendEmail(voters[i], electionName, r, score)
      }
      res.status(200).json({
        info: 'success',
        data:{
          electionName: electionName,
          winner: r
        }
      })
    });
    
    
  } catch (error) {
    res.status(401).json({
      info: 'error',
      data:{
        errorNumber: 18,
        error: error.message
      }
    })
  }
}

async function sendEmail(email : string, electionName: string, winner: string, score : {}){
  const subject = `The ${electionName}'s winner is ${winner}`;
  const text = `${score}`
  nodemailer(email, subject, text)
}