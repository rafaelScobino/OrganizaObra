import { Quinzena } from "./quinzena.model";

export class Obra{
    codObra: string;
    name: string;
    cliente: string;
    endereco: string;
    quinzenas: Quinzena[];
    inicio: Date;
    fim: Date;

    constructor(codObra:string,name:string,cliente:string,endereco:string,inicio:Date,fim:Date){
        this.codObra = codObra;
        this.name = name;
        this.cliente = cliente;
        this.endereco = endereco;
        this.quinzenas = []
        this.inicio = inicio;
        this.fim = fim;
    }
}