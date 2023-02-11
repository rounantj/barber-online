"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const views_1 = __importDefault(require("./views"));
const dotenv_1 = __importDefault(require("dotenv"));
const hbs = __importStar(require("express-handlebars"));
const mongo_1 = __importDefault(require("./core/mongo"));
const app = (0, express_1.default)();
const handlebars = hbs.create({
    defaultLayout: "main",
});
dotenv_1.default.config();
app.use(express_1.default.static("public"));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/../views`);
(0, mongo_1.default)();
app.use("/api", api_1.default);
app.use("/", views_1.default);
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup("./swagger.yml"));
const port = 3020;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map