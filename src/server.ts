import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userController from "./controllers/userController";

const app = express();

const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userController);

app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
});
