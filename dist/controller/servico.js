"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteServico = exports.updateServico = exports.getServicoById = exports.getServicos = exports.createServico = void 0;
const servico_1 = __importDefault(require("../model/servico"));
const createServico = (servicoData) => __awaiter(void 0, void 0, void 0, function* () {
    const servico = new servico_1.default(servicoData);
    return yield servico.save();
});
exports.createServico = createServico;
const getServicos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield servico_1.default.find().exec();
});
exports.getServicos = getServicos;
const getServicoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield servico_1.default.findById(id).exec();
});
exports.getServicoById = getServicoById;
const updateServico = (id, servicoData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield servico_1.default.findByIdAndUpdate(id, servicoData, { new: true }).exec();
});
exports.updateServico = updateServico;
const deleteServico = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield servico_1.default.findByIdAndRemove(id).exec();
});
exports.deleteServico = deleteServico;
//# sourceMappingURL=servico.js.map