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
exports.deleteUsuario = exports.updateUsuario = exports.getUsuarioById = exports.getUsuarios = exports.createUsuario = void 0;
const user_1 = __importDefault(require("../model/user"));
const createUsuario = (usuarioData) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = new user_1.default(usuarioData);
    return yield usuario.save();
});
exports.createUsuario = createUsuario;
const getUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.find().exec();
});
exports.getUsuarios = getUsuarios;
const getUsuarioById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findById(id).exec();
});
exports.getUsuarioById = getUsuarioById;
const updateUsuario = (id, usuarioData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByIdAndUpdate(id, usuarioData, { new: true }).exec();
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByIdAndRemove(id).exec();
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=user.js.map