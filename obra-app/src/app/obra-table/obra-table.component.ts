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

//URL Params
viewType!:string;
quinzena!:string;
obra!:string;

quinObraObj!:Obra;
obraList!:Array<Obra>;

isEdit:boolean = false;
editBtn:string = 'Editar Obra';



constructor(private router: Router,private lsServ: LocalStgServiceService){}


ngOnInit(): void {

  this.router.events.subscribe(() => {

    this.clearInfos()
    this.getParams()
    console.log(this.viewType)

    switch(this.viewType){
      case '0':
        this.getQuinInfo();
        break;
      case '1':
        this.getObraInfo();
        break;
      case '2':
        this.getAllObraInfo();
        break;
    }

  })

}


getParams(){

  let params = this.router.parseUrl(this.router.url).queryParams

  this.viewType = params['allObra']
  this.obra = params['codObra'];
  this.quinzena = params['quinzenaId']

}

createObra(cod: string,nome: string,cliente: string,endereco: string,inicio: Date,fim: Date){ 
    this.quinObraObj = new Obra(cod,nome,cliente,endereco,inicio,fim)
  }

getQuinInfo(){
  let obra = this.lsServ.lsObjGetOne(this.obra);
  let quinzena = parseInt(this.quinzena);
  this.createObra(obra.codObra,obra.name,obra.cliente,obra.endereco,obra.inicio,obra.fim)
  this.quinObraObj.quinzenas.push(obra.quinzenas[(quinzena-1)])
  this.obraList.push(this.quinObraObj);
}


getObraInfo(){
  let obra = this.lsServ.lsObjGetOne(this.obra)
  this.obraList.push(obra)
  console.log(this.obraList)
}

getAllObraInfo(){
  let obras = this.lsServ.lsObjGetAll();
  this.obraList = obras;
  console.log(this.obraList)
  
}

clearInfos(){
  this.obraList = [];
}

isEditActive(){
  this.isEdit = !this.isEdit;
  if(this.isEdit){
    this.editBtn = 'Fechar Edição'
  }else{
    this.editBtn = 'Editar Obra'
  }

}



}
