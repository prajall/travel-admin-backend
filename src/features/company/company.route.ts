import express from "express";
import { createCompany, fetchCompanies } from "./company.controller";

const router = express.Router();

router.get("/", fetchCompanies);
router.post("/", createCompany);

export default router;
