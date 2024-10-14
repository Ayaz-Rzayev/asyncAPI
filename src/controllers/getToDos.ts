import { Request, Response } from "express";
import getTodosQuery from "../models/getToDosQuery";
import catchAsync from "../catchAsync";

const getToDos = catchAsync(async (req: Request, res: Response) => {
    const result = await getTodosQuery()
    res.status(200).json(result)
})

export default getToDos;