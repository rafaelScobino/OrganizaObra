import { Component, Input, Output } from '@angular/core';
import { Funcionario } from '../../models/funcionario.model';
import { LocalStgServiceService } from '../../services/local-stg-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-func-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './func-form.component.html',
  styleUrl: './func-form.component.css'
})
export class FuncFormComponent {

  @Input('quinzena') selectedQuinzena!:string; 
  @Input('obra') selectedObra!:string; 

  nomeFunc!:string;
  funcaoFunc!:string;
  diasFunc!:number;
  diariaFunc!:number;
  pixFunc!:string;


  funcObj!:Funcionario;

  @Output() funcSubmitted: any

  constructor(private lsServ: LocalStgServiceService){}
  
  createFunc(){
  this.funcObj = new Funcionario(this.nomeFunc,this.funcaoFunc,this.diasFunc,this.diariaFunc,this.pixFunc)
  }

  cleanInputs(){
    this.nomeFunc = '';
    this.funcaoFunc = '';
    this.diasFunc = 0;
    this.diariaFunc = 0;
    this.pixFunc = '';
  }

  submitFunc(){
    let obraObj = this.lsServ.lsObjGetOne(this.selectedObra);

    let quinzena = parseInt(this.selectedQuinzena); 

    this.createFunc();

    let newFunc = this.funcObj;

    obraObj.quinzenas[(quinzena - 1)].funcionarios.push(newFunc);

    this.lsServ.lsObjSet(obraObj.codObra,obraObj);
    
    this.cleanInputs()

  }


}