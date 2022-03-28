import express from "express";
import {router} from "./routes";
import swaggerUI from "swagger-ui-express";
const app = express();

import swaggerFile from "./swagger.json";
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(express.static(__dirname + "/../public/"));

app.use(router);

app.listen(3000, ()=>{
  console.log("server is running!");
});
