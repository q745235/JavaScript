import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import getVoterList from '../../services/manager/getVoterList';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName, candidate, page} = req.body;
  try {
    await mydb.transaction(async (t) => {
      const r = await getVoterList(t,electionName, candidate, page);
      res.status(200).json({
        info: 'success',
        data:{
          electionName: electionName,
          voters: r
        }
      })
    });
  } catch (error) {
    res.status(401).json({
      info: 'error',
      data:{
        errorNumber: 15,
        error: error.message
      }
    })
  }
}