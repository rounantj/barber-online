import express, { Request, Response } from "express";
const router = express.Router();
import fs from "fs";

router.get("/", (req, res) => {
  const templateExists = fs.existsSync("./views/index.handlebars");
  if (templateExists) {
    res.render("index", {
      message: "Hello from the views!",
    });
  } else {
    res.render("error", {
      message: "Template not found",
    });
  }
});

router.get("/login", (req, res) => {
  const templateExists = fs.existsSync("./views/login.handlebars");
  if (templateExists) {
    res.render("login", {
      aside: "display:none !important",
    });
  } else {
    res.render("error", {
      message: "Template not found",
    });
  }
});

router.get("/registre-se", (req, res) => {
  const templateExists = fs.existsSync("./views/registre-se.handlebars");
  if (templateExists) {
    res.render("registre-se", {
      aside: "display:none !important",
    });
  } else {
    res.render("error", {
      message: "Template not found",
    });
  }
});

router.get("/parceiros", (req, res) => {
  const templateExists = fs.existsSync("./views/parceiros.handlebars");
  if (templateExists) {
    res.render("parceiros", {
      message: "Hello from the views!",
    });
  } else {
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

export default router;
