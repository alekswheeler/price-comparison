"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductController = void 0;
const calculateController_1 = require("./calculateController");
const createProductUseCase_1 = require("./createProductUseCase");
const createProductUseCase = new createProductUseCase_1.CreateProductUseCase();
const createProductController = new calculateController_1.CreateProductController(createProductUseCase);
exports.createProductController = createProductController;
