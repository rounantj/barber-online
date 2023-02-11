import Usuario, { IUser } from "../model/user";

export const createUsuario = async (usuarioData: IUser) => {
  const usuario = new Usuario(usuarioData);
  return await usuario.save();
};

export const getUsuarios = async () => {
  return await Usuario.find().exec();
};

export const getUsuarioById = async (id: string) => {
  return await Usuario.findById(id).exec();
};

export const updateUsuario = async (id: string, usuarioData: IUser) => {
  return await Usuario.findByIdAndUpdate(id, usuarioData, { new: true }).exec();
};

export const deleteUsuario = async (id: string) => {
  return await Usuario.findByIdAndRemove(id).exec();
};
