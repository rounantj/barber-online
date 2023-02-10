"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('index', {
        message: 'Hello from the views!',
    });
});
router.get('/login', (req, res) => {
    res.render('login', {
        aside: 'display:none !important',
    });
});
router.get('/registre-se', (req, res) => {
    res.render('registre-se', {
        aside: 'display:none !important',
    });
});
router.get('/parceiros', (req, res) => {
    res.render('parceiros', {
        message: 'Hello from the views!',
    });
});
exports.default = router;
//# sourceMappingURL=views.js.map