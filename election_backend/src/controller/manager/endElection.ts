import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import endElection from '../../services/manager/endElection';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName} = req.body;
  try {
    await mydb.transaction(async (t) => {
      await endElection(t,electionName);
    });
    res.status(200).json({
      info: 'success',
      data:{
        electionName: electionName,
      }
    })
    
  } catch (error) {
    res.status(401).json({
      info: 'error',
      data:{
        errorNumber: 12,
        error: error.message
      }
    })
  }
}