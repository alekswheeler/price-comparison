"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRouter = void 0;
const express_1 = require("express");
const calculate_1 = require("../useCases/calculate");
const calculateRouter = (0, express_1.Router)();
exports.calculateRouter = calculateRouter;
calculateRouter.get("/", (req, res) => {
    return calculate_1.createProductController.handle(req, res);
});
