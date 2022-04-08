import {calculateRouter} from "./calculate.routes";
import {Router} from "express";

// eslint-disable-next-line new-cap
const router = Router();

router.use("/calculate", calculateRouter);

router.get("/teste", (req, res)=>{
  return res.status(200).json({message: "OLA"});
});

router.get("/", (req, res)=>{
  return res.render("pages/index");
});

export {router};
