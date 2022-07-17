import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import getWinner from '../../services/manager/getWinner';

export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {electionName} = req.body;
  try {
    await mydb.transaction(async (t) => {
      const r = await getWinner(t,electionName);
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
        errorNumber: 17,
        error: error.message
      }
    })
  }
}