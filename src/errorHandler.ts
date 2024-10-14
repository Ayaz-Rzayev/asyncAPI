import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./ErrorResponse";
import HttpStatusCode from "./httpStatusCodes";

const errorHandler = (
  err: ErrorResponse,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("🚩", err);
  res.status(err.status ?? HttpStatusCode.INTERNAL_SERVER_ERROR).json({
    id: new Date().getTime(),
    status: err.status ?? HttpStatusCode.INTERNAL_SERVER_ERROR,
    messages: err.message ?? "Default error message",
  });
};

export default errorHandler;
