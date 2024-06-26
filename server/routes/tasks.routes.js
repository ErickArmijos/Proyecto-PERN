import { Router } from "express";
import { newTask,getTask,getTasks, updateTask, deleteTask } from "../controller/tasks.controller.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = Router();

router.get("/",verifyToken,getTasks)
router.get("/:id",verifyToken,getTask)
router.post("/",verifyToken,newTask)
router.put("/:id",verifyToken,updateTask)
router.delete("/:id",verifyToken,deleteTask)

export default router;