import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

(async () => {
  const server = app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
})();
