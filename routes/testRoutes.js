import express   from "express";
import { testControllers } from "../controllers/testControllers.js";

const router=express.Router()

router.post("/hammad",testControllers)










export default router