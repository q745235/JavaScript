import { Request, Response, NextFunction } from 'express';
import mydb from "../../mydb";
import register from '../../services/voter/register';
export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {identity,inputEmail} = req.body;
  console.log(req.body);

    try {
      await mydb.transaction(async (t) => {
        await register(t, identity,inputEmail);
        res.status(200).json({
          info: 'success',
          message:"success"
        })
      })
    } catch (error) {
      res.status(400).json({
        info :"err",
        data:{
          errorNumber: 1,
          error: error.message
        }
      });
    }
}