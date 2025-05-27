import express  from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import indexRoutes from './routes/index.js';
import cors from 'cors';

//require("dotenv").config();

const app = express();
app.use(cors())
const PORT = 8090;
const DATABASEURL = process.env.DATABASEURL;

app.use(bodyParser.json());

// Connect routes
app.use("/", indexRoutes);

mongoose
  .connect(DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Bookstore",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
    console.log("connection to database successful");
  })
  .catch((err) => {
    console.log(err);
  });
