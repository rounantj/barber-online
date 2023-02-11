import { Document, Schema, model } from 'mongoose';

export interface IServico extends Document {
  usuario: string;
  cliente: string;
  data: Date;
  valor: number;
  comissao: number;
}

const ServicoSchema: Schema = new Schema({
  usuario: { type: String, required: true },
  cliente: { type: String, required: true },
  data: { type: Date, required: true },
  valor: { type: Number, required: true },
  comissao: { type: Number, required: true },
});

const Servico = model<IServico>('Servico', ServicoSchema);

export default Servico;
