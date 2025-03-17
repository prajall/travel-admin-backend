import express, { Request, Response } from "express";

const app = express();
const PORT = 4001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Server is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
