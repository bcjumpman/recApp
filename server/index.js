import express from "express";
import mongoose from "mongoose";
import { MONGO_URI } from "./config/keys.js";
import { profiles } from "./routes/profiles.js";

// express json
// console.log(express);

const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is Successfully Connected"))
  .catch((err) => console.log(err));

// Test route to check if it works
app.get("/test", (_, res) => res.send("This works!"));
// debugger;

//* profile route
app.use("/api/profiles", profiles);

// identify port
const port = 8080;
// callback and print that the app is running
const callback = () => console.log(`Server is running on port ${port}`);

app.listen(port, callback);
