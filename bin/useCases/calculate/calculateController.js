"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const product_1 = require("../../models/product");
;
class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }
    handle(req, res) {
        const { type1, type2, amount1, amount2, value1 } = req.query;
        const p1 = {
            amount: Number.parseFloat(amount1),
            value: Number.parseFloat(value1),
            type: type1,
        };
        const p2 = {
            amount: Number.parseFloat(amount2),
            value: -1,
            type: type2,
        };
        const product1 = this.createProductUseCase.execute(p1);
        const product2 = this.createProductUseCase.execute(p2);
        // Adiciona e inicializa uma propriedade a um objeto
        if (product_1.Product.calculate(product1, product2)) {
            const r = {
                result: product2.value,
            };
            return res.status(201).json(r).send();
        }
        else {
            return res.status(500).json({ "error": "Types are bad or non valid values" });
        }
    }
}
exports.CreateProductController = CreateProductController;
