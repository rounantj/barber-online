import Servico, { IServico } from '../model/servico';

export const createServico = async (servicoData: IServico) => {
  const servico = new Servico(servicoData);
  return await servico.save();
};

export const getServicos = async () => {
  return await Servico.find().exec();
};

export const getServicoById = async (id: string) => {
  return await Servico.findById(id).exec();
};

export const updateServico = async (id: string, servicoData: IServico) => {
  return await Servico.findByIdAndUpdate(id, servicoData, { new: true }).exec();
};

export const deleteServico = async (id: string) => {
  return await Servico.findByIdAndRemove(id).exec();
};
