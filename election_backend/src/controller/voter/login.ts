import { Request, Response, NextFunction } from "express";
import mydb from "../../mydb";
import queryVoter from "../../services/voter/queryVoter";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const {email, identity} = req.body;

    if (!email || !identity) {
      return next(new Error("Email or identity is undefined."));
    }

    await mydb.transaction(async (t) => {
      const userId = await queryVoter(t, identity, email);
      res["userId"] = userId;
    });

    return next();
    // next to sendToken middleware
  } catch (error) {
    return next(error);
  }
}
