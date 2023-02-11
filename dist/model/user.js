"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    foto: { type: String, required: false },
    cargo: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    dataCriacao: { type: Date, required: true, default: Date.now },
    telefone: { type: String, required: false },
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map