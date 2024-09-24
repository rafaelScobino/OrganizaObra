import { Funcionario } from "./funcionario.model";

export class Quinzena {

  codQuin: number;
  funcionarios: Funcionario[];
  inicio: Date;
  fim: Date;

  constructor(codQuin:number,inicio:Date,fim:Date){
    this.codQuin = codQuin;
    this.funcionarios = [];
    this.inicio = inicio;
    this.fim = fim;
  
  }


}