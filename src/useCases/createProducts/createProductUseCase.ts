import {Product} from "../../models/product";

interface IDataRequest{
  amount: Number;
  value: Number;
  type: string;
}


class CreateProductUseCase {
  constructor() {}

  execute({amount, value, type}: IDataRequest): Product {
    console.log("CREATTING PRODUCT");
    const product: Product = new Product({amount, value, type});

    return product;
  }
}

export {CreateProductUseCase};
