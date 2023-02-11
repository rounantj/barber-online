"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServicoSchema = new mongoose_1.Schema({
    usuario: { type: String, required: true },
    cliente: { type: String, required: true },
    data: { type: Date, required: true },
    valor: { type: Number, required: true },
    comissao: { type: Number, required: true },
});
const Servico = (0, mongoose_1.model)('Servico', ServicoSchema);
exports.default = Servico;
//# sourceMappingURL=servico.js.map