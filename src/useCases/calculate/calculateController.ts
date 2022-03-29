import {Request, Response} from "express";
import {CreateProductUseCase} from "./createProductUseCase";
import {Product} from "../../models/product";

interface IDataRequest{
  amount: Number;
  value: Number;
  type: string;
};

class CreateProductController {
  createProductUseCase: CreateProductUseCase;

  constructor(createProductUseCase: CreateProductUseCase) {
    this.createProductUseCase = createProductUseCase;
  }

  handle(req: Request, res: Response) {
    const {type1, type2, amount1, amount2, value1} = req.query;

    const p1: IDataRequest = {
      amount: Number.parseFloat(amount1 as string),
      value: Number.parseFloat(value1 as string),
      type: type1 as string,
    };

    const p2: IDataRequest = {
      amount: Number.parseFloat(amount2 as string),
      value: -1,
      type: type2 as string,
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
