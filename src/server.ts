import express from "express";
import {router} from "./routes";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger.json";
import path from "path";
import ejs from "ejs";

const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.set("views", path.join(__dirname, "/../public/views/"));

app.use(router);

app.listen(3000, ()=>{
  console.log("server is running!");
});
