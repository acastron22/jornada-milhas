import { IEstados } from './IEstados';

export interface iResultado {
  paginaAtual: number;
  ultimaPagina: number;
  total: number;
  precoMin: number;
  precoMax: number;
  resultado: iPassagens[];
}

export interface iPassagens {
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: IEstados;
  destino: IEstados;
  companhia: iCompanhias;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: iOrcamento[];
}

export interface iCompanhias {
  id: string;
  nome: string;
}

export interface iOrcamento {
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number;
}
