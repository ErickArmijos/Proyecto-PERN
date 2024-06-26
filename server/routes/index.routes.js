import { Router } from "express";
import routerAuth from "./auth.routes.js";
import routerTasks from "./tasks.routes.js";

const router = Router()

router.use("/api",routerAuth)
router.use("/tasks",routerTasks)

export default router;