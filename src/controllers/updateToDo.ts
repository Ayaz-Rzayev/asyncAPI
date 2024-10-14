import { Request, Response } from "express";
import catchAsync from "../catchAsync";
import updateToDoQuery from "../models/updateToDoQuery";

const updateToDo = catchAsync(async (req: Request, res: Response) => {
    const {id, title, status} = req.body
    const result = await updateToDoQuery(id, title, status)
    res.status(200).json(result)
})

export default updateToDo;