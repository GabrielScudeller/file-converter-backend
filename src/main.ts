import express from "express";
import multer from "multer";
import path from "path";
import { converterRoutes } from "./routes/converterRoutes";

const App = express();

App.use("/converter", converterRoutes);

App.listen(3000, () => {
  console.log("Server is running on port 3000");
});
