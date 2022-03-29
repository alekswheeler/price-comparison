"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const product_1 = require("../../models/product");
class CreateProductUseCase {
    constructor() { }
    execute({ amount, value, type }) {
        const product = new product_1.Product({ amount, value, type });
        return product;
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
