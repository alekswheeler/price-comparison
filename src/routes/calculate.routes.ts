import {Router, Response, Request} from "express";
import {createProductController} from "../useCases/calculate";
const calculateRouter = Router();

calculateRouter.post("/", (req: Request, res: Response)=>{
  return createProductController.handle(req, res);
});

export {calculateRouter};
