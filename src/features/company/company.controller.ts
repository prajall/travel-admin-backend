import { Request, Response } from "express";
import pool from "../../db/db";

export const fetchCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await pool.query("select * from companies");
    console.log(companies.rows);
    res.json(companies.rows);
  } catch (err) {
    console.log("Error fetching companies:", err);
  }
};

export const createCompany = async (req: Request, res: Response) => {
  const { name, address, email, contact_phone, logo_url, company_website } =
    req.body;

  console.log("n");
  try {
    const newCompany = await pool.query(
      `
      INSERT INTO companies (name, address, email,contact_phone, logo_url, company_website) 
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
       `,
      [name, address, email, contact_phone, logo_url, company_website]
    );
    console.log(newCompany.rows);
    res.status(201).json(newCompany.rows[0]);
  } catch (err) {
    console.log("Error fetching users:", err);
    res.send("Internal Server ERror");
  }
};
