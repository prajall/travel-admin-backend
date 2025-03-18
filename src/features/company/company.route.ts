import express from "express";
import { createCompany, fetchUsers } from "./company.controller";

const router = express.Router();

router.get("/", fetchUsers);
router.post("/", createCompany);

export default router;
