"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Middleware para verificar autenticação
const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
        return res.status(401).send("Access Denied");
    try {
        const verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map