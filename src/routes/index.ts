import { Router } from "express";
import getToDos from "../controllers/getTodos";
import addToDo from "../controllers/addToDo";
import updateToDo from "../controllers/updateToDo";
import deleteToDo from "../controllers/deleteToDo";

const router = Router();

router.get("/get", getToDos);
router.post("/add", addToDo);
router.put("/update", updateToDo);
router.delete("/delete", deleteToDo);

export default router;
    