import express, { json } from "express";
import { db } from "./database/db";
import { UserModel } from "../src/database/models/UserModels";
import { router } from "./routes/accountsRoutes";
const app = express();
UserModel.sync();

app.use(json());
app.use(router);
app.listen(3000, async () => {
  await db.sync();
  console.log("Server is running on port 3000");
});
