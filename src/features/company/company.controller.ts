import { Request, Response } from "express";
import pool from "../../db/db";

export const fetchUsers = async (req: Request, res: Response) => {
  try {
    const users = await pool.query("select * from companies");
    console.log(users.rows);
    res.send("hello");
  } catch (err) {
    console.log("Error fetching users:", err);
  }
};

export const createCompany = async (req: Request, res: Response) => {
  console.log("correct");
  const { name, address, email, contact_phone, logo_url, company_website } =
    req.body;
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
    res.status(201).json(newCompany.rows);
  } catch (err) {
    console.log("Error fetching users:", err);
  }
};
