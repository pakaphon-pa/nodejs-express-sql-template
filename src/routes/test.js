import express from "express";
import { testController } from "../controllers/test";

const router = express.Router();

router.get("/", testController);

export default router;
