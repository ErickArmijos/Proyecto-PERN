import { Router } from "express";
import authController from "../controller/auth.controller.js"
import verifyToken from "../middlewares/verifyToken.js";
import {validateSchema} from "../middlewares/verifySchemas.js"
import  {loginSchema,registerSchema} from "../schemas/users.schema.js"

const router = Router();

router.post("/login",validateSchema(loginSchema),authController.login)
router.post("/register",validateSchema(registerSchema),authController.register)
router.post("/logout",authController.logout)
router.get("/profile",verifyToken,authController.profile)

export default router;