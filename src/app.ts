import express, { Request, Response } from "express";

import companyRoute from "./features/company/company.route";
import pool from "./db/db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Server is working!");
});

app.use("/company", companyRoute);

export default app;
