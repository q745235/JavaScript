import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import getVotes from '../../services/manager/getVotes';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName} = req.body;
  try {
    await mydb.transaction(async (t) => {
      const r = await getVotes(t,electionName);
      res.status(200).json({
        info: 'success',
        data:{
          electionName: r.electionName,
          candidates: r.candidates
        }
      })
    });
    
    
  } catch (error) {
    res.status(401).json({
      info: 'error',
      data:{
        errorNumber: 14,
        error: error.message
      }
    })
  }
}