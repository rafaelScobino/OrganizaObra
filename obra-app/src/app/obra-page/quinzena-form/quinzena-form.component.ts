import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LocalStgServiceService } from '../../services/local-stg-service.service';
import { Quinzena } from '../../models/quinzena.model';


@Component({
  selector: 'app-quinzena-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quinzena-form.component.html',
  styleUrl: './quinzena-form.component.css'
})
export class QuinzenaFormComponent {

  @Input() obra!: string;

  inicioQuinzena!:Date;
  fimQuinzena!:Date;

  quinzenaObj!:Quinzena;

  constructor(private lsServ: LocalStgServiceService){}

  
  getQuinzenaId(arr:Array<any>){
    let newId:number;

    if(arr.length >= 1){
      newId = arr.length + 1
    }else{
      newId = 1
    }

    return newId;
  }

  createQuinzena(codQuin:number){
  this.quinzenaObj = new Quinzena(codQuin,this.inicioQuinzena,this.fimQuinzena)
  }

  submitQuinzena(){
    let obraObj = this.lsServ.lsObjGetOne(this.obra);

    let quinzenaId = this.getQuinzenaId(obraObj.quinzenas); 

    this.createQuinzena(quinzenaId);

    let newQuinzena = this.quinzenaObj;

    obraObj.quinzenas.push(newQuinzena);

    this.lsServ.lsObjSet(obraObj.codObra,obraObj);

  }




}
