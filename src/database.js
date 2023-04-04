import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/flyfishingdb")
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log(error));
