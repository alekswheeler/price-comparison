import {calculateRouter} from "./calculate.routes";
import {Router} from "express";


// eslint-disable-next-line new-cap
const router = Router();

router.use("/calculate", calculateRouter);

export {router};
