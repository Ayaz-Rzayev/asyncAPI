import { Request, Response } from "express";
import catchAsync from "../catchAsync";
import deleteToDoQuery from "../models/deleteToDoQuery";

const deleteToDo = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.body;
  const result = await deleteToDoQuery(id);
  res.status(200).json(result);
});

export default deleteToDo;
