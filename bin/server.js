"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.use(express_1.default.json());
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.set("views", path_1.default.join(__dirname, "/../public/views/"));
app.use(routes_1.router);
app.listen(3000, () => {
    console.log("server is running!");
});
