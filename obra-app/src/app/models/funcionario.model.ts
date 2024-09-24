export class Funcionario {
    name: string;
    funcao: string;
    dias: number;
    diaria: number;
    remuneracao: number;
    pix:string;

    constructor(name:string,funcao:string,dias:number,diaria:number,pix:string){
        this.name = name;
        this.funcao = funcao;
        this.dias = dias;
        this.diaria = diaria;
        this.remuneracao = this.dias * this.diaria
        this.pix = pix;
    }


}