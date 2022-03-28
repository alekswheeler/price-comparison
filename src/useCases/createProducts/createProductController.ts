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


    if (Product.calculate(product1, product2)) {
      const r = {
        result: product2.value,
      };
      return res.status(201).json(r).send();
    } else {
      return res.status(500).json({"error": "Types are bad or non valid values"}).send();
    }
  }
}

export {CreateProductController};
