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
exports.refreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("./model/user"));
const servico_1 = require("./controller/servico");
const user_2 = require("./controller/user");
const jwt_1 = require("./helpers/jwt");
const router = express_1.default.Router();
const refreshToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "7d",
    });
    return token;
};
exports.refreshToken = refreshToken;
router.post("/refresh-token", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, exports.refreshToken)(req.user);
    res.header("auth-token", token).send({ token });
}));
// Rota para registrar usuário
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const user = new user_1.default({
        email,
        password: hashedPassword,
    });
    try {
        const savedUser = yield user.save();
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
}));
// Rota para fazer login
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_1.default.findOne({ email });
    if (!user)
        return res.status(400).send("Email or Password is incorrect");
    const validPassword = yield bcryptjs_1.default.compare(password, user.password);
    if (!validPassword)
        return res.status(400).send("Email or Password is incorrect");
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
    });
    res.header("auth-token", token).send(token);
}));
router.get("/servicos", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicos = yield (0, servico_1.getServicos)();
    res.send(servicos);
}));
router.put("/servicos", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicos = yield (0, servico_1.createServico)(req.body);
    res.send(servicos);
}));
router.delete("/servicos/:id", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicos = yield (0, servico_1.deleteServico)(req.params.id);
    res.send({ deleted: true });
}));
router.patch("/servicos/:id", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const servicos = yield (0, servico_1.updateServico)(req.params.id, req.body);
    res.send(servicos);
}));
router.get("/usuarios", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, user_2.getUsuarios)();
    res.send(usuarios);
}));
router.get("/usuarios/:id", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, user_2.getUsuarioById)(req.params.id);
    res.send(usuarios);
}));
router.put("/usuarios", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, user_2.createUsuario)(req.body);
    res.send(usuarios);
}));
router.delete("/usuarios/:id", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, user_2.deleteUsuario)(req.params.id);
    res.send({ deleted: true });
}));
router.patch("/usuarios/:id", jwt_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield (0, user_2.updateUsuario)(req.params.id, req.body);
    res.send(usuarios);
}));
exports.default = router;
//# sourceMappingURL=api.js.map