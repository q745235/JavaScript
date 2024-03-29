import { Request, Response, NextFunction } from "express";
import { verifyToken } from "./token";
import { voterList_tb } from "../../mydb";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization = <string>req.headers.authorization;
  if (authorization === undefined) {
    next(new Error("Token Auth failed"));
    return null;
  }

  try {
    const token = authorization.replace(/^Bearer /, "");

    const tokenInfo = verifyToken(token);
    const userId = tokenInfo["userId"];

    // console.log({userId: userId});

    res["userId"] = userId;

    const user = <any>await voterList_tb.findOne({
      where: {
        userId: userId,
      },
    });

    if (!user) {
      return next(new Error("Token Cannot get user"));
    }

    if(user.isManager != 1){
      return next(new Error("Token is not Manager"));
    }

    next();
  } catch (error) {
    console.log("token : ",error);
    return next(new Error("User token verify error"));
  }
};
