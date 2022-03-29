"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const calculate_routes_1 = require("./calculate.routes");
const express_1 = require("express");
// eslint-disable-next-line new-cap
const router = (0, express_1.Router)();
exports.router = router;
router.use("/calculate", calculate_routes_1.calculateRouter);
router.get("/teste", (req, res) => {
    return res.status(200).json({ message: "Olá mundo!!" }).send();
});
router.get("/", (req, res) => {
    return res.render("pages/index");
});
