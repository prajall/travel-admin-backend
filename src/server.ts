import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
