import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
