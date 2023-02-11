import jwt from "jsonwebtoken";
import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User, { IUser } from "./model/user";
import {
  createServico,
  deleteServico,
  getServicos,
  updateServico,
} from "./controller/servico";
import {
  createUsuario,
  getUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
} from "./controller/user";
import { verifyToken } from "./helpers/jwt";

const router = express.Router();
export const refreshToken = (user: any) => {
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

router.post("/refresh-token", verifyToken, async (req: any, res: Response) => {
  const token = refreshToken(req.user);
  res.header("auth-token", token).send({ token });
});

// Rota para registrar usuário
router.post("/register", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user: IUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Rota para fazer login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: any = await User.findOne({ email });
  if (!user) return res.status(400).send("Email or Password is incorrect");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).send("Email or Password is incorrect");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });

  res.header("auth-token", token).send(token);
});

router.get("/servicos", verifyToken, async (req, res) => {
  const servicos = await getServicos();
  res.send(servicos);
});

router.put("/servicos", verifyToken, async (req, res) => {
  const servicos = await createServico(req.body);
  res.send(servicos);
});

router.delete("/servicos/:id", verifyToken, async (req, res) => {
  const servicos = await deleteServico(req.params.id);
  res.send({ deleted: true });
});

router.patch("/servicos/:id", verifyToken, async (req, res) => {
  const servicos = await updateServico(req.params.id, req.body);
  res.send(servicos);
});

router.get("/usuarios", verifyToken, async (req, res) => {
  const usuarios = await getUsuarios();
  res.send(usuarios);
});
router.get("/usuarios/:id", verifyToken, async (req, res) => {
  const usuarios = await getUsuarioById(req.params.id);
  res.send(usuarios);
});

router.put("/usuarios", verifyToken, async (req, res) => {
  const usuarios = await createUsuario(req.body);
  res.send(usuarios);
});

router.delete("/usuarios/:id", verifyToken, async (req, res) => {
  const usuarios = await deleteUsuario(req.params.id);
  res.send({ deleted: true });
});

router.patch("/usuarios/:id", verifyToken, async (req, res) => {
  const usuarios = await updateUsuario(req.params.id, req.body);
  res.send(usuarios);
});
export default router;
