import { Component, Input, OnInit } from '@angular/core';
import { Obra } from '../models/obra.model';
import { Router, RouterOutlet } from '@angular/router';
import { LocalStgServiceService } from '../services/local-stg-service.service';
import { FuncFormComponent } from './func-form/func-form.component';
import { ObraFormComponent } from './obra-form/obra-form.component';
import { ObraTableComponent } from '../obra-table/obra-table.component';
import { QuinzenaFormComponent } from './quinzena-form/quinzena-form.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-obra-page',
  standalone: true,
  imports: [FuncFormComponent,QuinzenaFormComponent,ObraFormComponent,ObraTableComponent,RouterOutlet,CommonModule,NgFor],
  templateUrl: './obra-page.component.html',
  styleUrl: './obra-page.component.css'
})
export class ObraPageComponent implements OnInit {

  isObraActive:boolean = false;
  isFuncActive:boolean = false;
  isQuinzenaActive:boolean = false;
  isQuinSelectActive:boolean = false;

  obraOptions!:Array<any>;
  @Input() selectedObra!:string;

  quinzenaOptions!:Array<any>;
  @Input() selectedQuinzena:string = '1';
  
  constructor(private router: Router,private lsServ: LocalStgServiceService){}

  ngOnInit(): void {
    
    this.getObrasId()
  }


  getObrasId(){

    let obraOpts:Array<any> = this.lsServ.lsKeyGetAll()

    this.obraOptions = obraOpts

  }

  getSelectedObra(value:string){
  this.selectedObra = value;
  this.getObrasId()
  this.isQuinSelectActive = true;
  this.getQuinzenasId()
  }

  getQuinzenasId(){

    let quinzenaOpts:Array<any> = this.lsServ.lsObjGetOne(this.selectedObra).quinzenas

    this.quinzenaOptions = quinzenaOpts

  }

  getSelectedQuinzena(value:string){
  this.selectedQuinzena = value;
  
  }


  quinzenaRoute(){
  this.router.navigate(['obra-page/obra-tables/'],{queryParams:{'codObra':this.selectedObra,'quinzenaId':this.selectedQuinzena,'allObra':0}})
  }

  obraRoute(){
  this.router.navigate(['obra-page/obra-tables/'],{queryParams:{'codObra':this.selectedObra,'quinzenaId':this.selectedQuinzena,'allObra':1}})
  }

  allObraRoute(){
  this.router.navigate(['obra-page/obra-tables/'],{queryParams:{'codObra':this.selectedObra,'quinzenaId':this.selectedQuinzena,'allObra':2}})
  }

}
