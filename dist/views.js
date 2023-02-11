"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const fs_1 = __importDefault(require("fs"));
router.get("/", (req, res) => {
    const templateExists = fs_1.default.existsSync("./views/index.handlebars");
    if (templateExists) {
        res.render("index", {
            message: "Hello from the views!",
        });
    }
    else {
        res.render("error", {
            message: "Template not found",
        });
    }
});
router.get("/login", (req, res) => {
    const templateExists = fs_1.default.existsSync("./views/login.handlebars");
    if (templateExists) {
        res.render("login", {
            aside: "display:none !important",
        });
    }
    else {
        res.render("error", {
            message: "Template not found",
        });
    }
});
router.get("/registre-se", (req, res) => {
    const templateExists = fs_1.default.existsSync("./views/registre-se.handlebars");
    if (templateExists) {
        res.render("registre-se", {
            aside: "display:none !important",
        });
    }
    else {
        res.render("error", {
            message: "Template not found",
        });
    }
});
router.get("/parceiros", (req, res) => {
    const templateExists = fs_1.default.existsSync("./views/parceiros.handlebars");
    if (templateExists) {
        res.render("parceiros", {
            message: "Hello from the views!",
        });
    }
    else {
        res.render("error", {
            message: "Template not found",
        });
    }
});
router.all("*", (req, res) => {
    res.status(404).render("error", {
        aside: "display:none !important",
    });
});
exports.default = router;
//# sourceMappingURL=views.js.map