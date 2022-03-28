import {Router, Response, Request} from "express";
import {createProductController} from "../useCases/createProducts";
const calculateRouter = Router();

calculateRouter.get("/", (req: Request, res: Response)=>{
  // const {type1, amount1, value1, type2, amount2} = req.body;

  return createProductController.handle(req, res);

  // console.log(amount1, value1, amount2);
  // res.json({"error": "Sorry, try again."}).send();
});

export {calculateRouter};
