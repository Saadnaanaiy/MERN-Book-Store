import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModels.js";
import booksRouter from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

// Middleware for parsing request body
app.use(express.json());
// Middleware for handling CORS POLICY
//! Option 1 --> Allow All Origins with Default of cors(*)
app.use(cors());
//! Option 2 --> Allow Custom Origins
// app.use(
//   cors({
//     origin: "https://books-store-saad.netlify.app",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("hello i am saad naanaiy !");
});

app.use("/books", booksRouter);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database successfully!`);
    // the server will be run if the connection with mongoDB database is succesfull if not the server will not run
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
