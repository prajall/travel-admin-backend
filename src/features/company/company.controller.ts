import { Request, Response } from "express";
import pool from "../../db/db";
import { apiError, apiResponse } from "../../utils/response.util";
import { insertCompany, selectAllCompanies } from "./company.model";

export const fetchCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await selectAllCompanies();
    console.log(companies);
    return apiResponse(res, 200, "Companies fetched successfully", companies);
  } catch (err) {
    console.log("Error fetching companies:", err);
    return apiError(res, 500, "Internal Server Error", err);
  }
};

export const createCompany = async (req: Request, res: Response) => {
  try {
    const newCompany = await insertCompany(req);
    console.log(newCompany);
    return apiResponse(res, 201, "Company created successfully", newCompany);
  } catch (err) {
    console.log("Error fetching users:", err);
    return apiError(res, 500, "Internal Server Error", err);
  }
};
