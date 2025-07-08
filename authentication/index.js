import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()

// (async () => {
//   try {

//     app.on("error", (error) => {
//       console.log("Err: ", error);
//       throw error;
//     });

//     app.listen(port, () => {
//       console.log(`server is running on http://localhost:${port}`);
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     throw error;
//   }
// })();
