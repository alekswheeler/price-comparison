import {CreateProductController} from "./calculateController";
import {CreateProductUseCase} from "./createProductUseCase";

const createProductUseCase = new CreateProductUseCase();

const createProductController = new CreateProductController(createProductUseCase);

export {createProductController};
