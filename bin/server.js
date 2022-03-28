"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "hello world!" });
});
app.post("/", (req, res) => {
    const { item1, item2, value } = req.query;
    console.log(item1, item2, value);
    res.status(200).send("50");
});
app.listen(3000, () => {
    console.log("server is running!");
    console.log("ajsksjasakk");
});
