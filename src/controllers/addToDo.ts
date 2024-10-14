import { Request, Response } from "express";
import catchAsync from "../catchAsync";
import addToDoQuery from "../models/addToDoQuery";

const addToDo = catchAsync(async (req: Request, res: Response) => {
    const {title, status} = req.body
    const result = await addToDoQuery(title, status)
    res.status(200).json(result)
});

export default addToDo;