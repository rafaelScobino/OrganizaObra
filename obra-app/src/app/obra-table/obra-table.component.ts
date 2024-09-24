import { Component, OnInit } from '@angular/core';
import { LocalStgServiceService } from '../services/local-stg-service.service';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario.model';
import { CommonModule} from '@angular/common';
import { Quinzena } from '../models/quinzena.model';
import { Obra } from '../models/obra.model';

@Component({
  selector: 'app-obra-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obra-table.component.html',
  styleUrl: './obra-table.component.css'
})

export class ObraTableComponent implements OnInit {

obra!:string;
obraObj!:Obra;
quinzenaObj!:Quinzena;
quinzena!:string;
funcList!:Array<Funcionario>;


constructor(private router: Router,private lsServ: LocalStgServiceService){}


ngOnInit(): void {

  this.router.events.subscribe((data) => {

    this.getParams()
    console.log(this.obra + this.quinzena)
    this.getInfos()

  })

}


getParams(){

  let params = this.router.parseUrl(this.router.url).queryParams

  this.obra = params['codObra'];
  this.quinzena = params['quinzenaId']

}

getInfos(){
  let obra = this.lsServ.lsObjGetOne(this.obra)
  this.obraObj = obra;
  let quinzena = parseInt(this.quinzena);
  this.quinzenaObj = obra.quinzenas[(quinzena-1)];
  let funcArr = obra.quinzenas[(quinzena - 1)].funcionarios
  this.funcList = funcArr;

}



}
