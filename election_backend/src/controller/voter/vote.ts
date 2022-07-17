import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import vote from '../../services/voter/vote';
import getVotes from '../../services/manager/getVotes';
export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName, candidate} = req.body;
  const userId = res["userId"];
  try {
    await mydb.transaction(async (t) => {
      await vote(t,electionName, candidate, userId);
      const r = await getVotes(t, electionName);
      res.status(200).json({
        info: 'success',
        data:{
          electionName: r.electionName,
          candidate: r.candidates,
        }
      })
    });
    
    
  } catch (error) {
    res.status(400).json({
      info: 'error',
      data:{
        errorNumber: 2,
        error: error.message
      }
    })
  }
}