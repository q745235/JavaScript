import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import addCandidate from '../../services/manager/addCandidate';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName, candidate, page} = req.body;
  try {
    await mydb.transaction(async (t) => {
      await addCandidate(t,electionName, candidate);
      res.status(200).json({
        info: 'success',
        data:{
          electionName: electionName,
          candidate: candidate
        }
      })
    });
    
    
  } catch (error) {
    res.status(401).json({
      info: 'error',
      data:{
        errorNumber: 13,
        error: error.message
      }
    })
  }
}