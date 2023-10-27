import { IEstados } from './IEstados';

export interface iResultados {
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
  companhia: iCompanhia;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: iOrcamento[];
}

export interface iOrcamento {
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number;
}

export interface iCompanhia {
  id: string;
  nome: string;
}
