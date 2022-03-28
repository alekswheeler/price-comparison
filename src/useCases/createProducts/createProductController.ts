import {Request, Response} from "express";
import {CreateProductUseCase} from "./createProductUseCase";
import {Product} from "../../models/product";

class CreateProductController {
  createProductUseCase: CreateProductUseCase;

  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }

  handle(req: Request, res: Response) {
    const {type1, amount1, value1, type2, amount2} = req.body;

    const p1 = {
      amount: amount1,
      value: value1,
      type: type1,
    };

    const p2 = {
      amount: amount2,
      value: -1,
      type: type2,
    };

    const product1: Product = this.createProductUseCase.execute(p1);
    const product2: Product = this.createProductUseCase.execute(p2);

    // Adiciona e inicializa uma propriedade a um objeto
    Object.assign(req, product1);
    Object.assign(req, product2);

    if (Product.calculate(p1, p2) === 1) {
      return res.status(201).json({"message": "Types OK"}).send();
    } else {
      return res.status(500).json({"error": "Types are BAD"}).send();
    }
  }
}

export {CreateProductController};
