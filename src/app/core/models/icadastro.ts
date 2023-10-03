import { IEstados } from './IEstados';

export interface ICadastro {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  genero: string;
  cidade: string;
  estado: IEstados;
}
