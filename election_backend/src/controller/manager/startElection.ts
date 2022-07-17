import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import startElection from '../../services/manager/startElection';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName, startTime, endTime} = req.body;
  try {
    await mydb.transaction(async (t) => {
      await startElection(t,electionName, startTime, endTime);
    });
    res.status(200).json({
      info: 'success',
      data:{
        electionName: electionName,
        startTime: startTime,
        endTime: endTime
      }
    })
    
  } catch (error) {
    res.status(401).json({
      info: 'error',
      data:{
        errorNumber: 11,
        error: error.message
      }
    })
  }
}