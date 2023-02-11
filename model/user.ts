import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  nome: string;
  foto: string;
  cargo: string;
  email: string;
  senha: string;
  dataCriacao: Date;
  telefone: string;
}

const UserSchema: Schema = new Schema({
  nome: { type: String, required: true },
  foto: { type: String, required: false },
  cargo: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  dataCriacao: { type: Date, required: true, default: Date.now },
  telefone: { type: String, required: false },
});

const User = model<IUser>("User", UserSchema);

export default User;
