import {Router, Response, Request} from "express";
import {createProductController} from "../useCases/createProducts";
const calculateRouter = Router();

calculateRouter.get("/", (req: Request, res: Response)=>{
  return createProductController.handle(req, res);
});

export {calculateRouter};
