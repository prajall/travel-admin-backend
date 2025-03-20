import { Request } from "express";
import pool from "../../db/db";

export const insertCompany = async (req: Request) => {
  try {
    const { rows } = await pool.query(
      `
            INSERT INTO companies (name, address, email,contact_phone, logo_url, company_website) 
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING *
            `,
      [
        req.body.name,
        req.body.address,
        req.body.email,
        req.body.contact_phone,
        req.body.logo_url,
        req.body.company_website,
      ]
    );
    return rows[0];
  } catch (err) {
    console.log("Error inserting company:", err);
    throw err;
  }
};

export const selectAllCompanies = async () => {
  try {
    const { rows } = await pool.query(`
        SELECT * FROM companies
    `);
    return rows;
  } catch (err) {
    console.log("Error fetching companies:", err);
    throw err;
  }
};
