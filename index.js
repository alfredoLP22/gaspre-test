import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dataConnection } from "./config/db.js";
import StationsRouter from "./routes/stations.routes.js";

const app = express();
app.use(express.json());

dotenv.config();
app.use(cors());
const port = process.env.PORT || 4000;

dataConnection
  .initialize()
  .then(() => {
    console.log("Conecction correct");
  })
  .catch((error) => {
    console.error(`Error during Data Source initialization: ${error}`);
  });

app.use("/stations", StationsRouter);

app.listen(port, "127.0.0.1", () => {
  console.log(`The server is running on port: ${port}`);
});
