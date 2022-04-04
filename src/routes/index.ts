import {calculateRouter} from "./calculate.routes";
import {Router} from "express";

// eslint-disable-next-line new-cap
const router = Router();

router.use("/calculate", calculateRouter);

router.get("/teste", async (req, res)=>{
  return res.json({message: "Olá mundo!!"}).send();
});

router.get("/", async (req, res)=>{
  return res.render("pages/index");
});

export {router};
