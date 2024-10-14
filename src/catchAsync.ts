import { NextFunction, Request, Response } from "express";

const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => any
) => {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch((err: Error) => next(err));
  };
};

export default catchAsync;
