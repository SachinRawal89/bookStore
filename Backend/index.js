import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app = express()

app.use(cors());
app.use(express.json());


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongodbURI;

// Connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDb")

  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

connectDB();

// Defining Routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

//gpt
app.use("/pdf", express.static("public"));
//

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})
