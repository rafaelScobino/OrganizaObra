import { Component } from '@angular/core';
import { Obra } from '../../models/obra.model';
import { FormsModule } from '@angular/forms';
import { LocalStgServiceService } from '../../services/local-stg-service.service';

@Component({
  selector: 'app-obra-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './obra-form.component.html',
  styleUrl: './obra-form.component.css'
})
export class ObraFormComponent {

  constructor(private lsServ: LocalStgServiceService){}

  codObra:string= "";
  nomeObra:string= "";
  clienteObra:string= "";
  enderecoObra:string= "";
  inicioObra:Date= new Date();
  fimObra:Date= new Date();

  obraObj!:Obra;

  clearObraForm(){
    this.codObra = "";
    this.nomeObra = "";
    this.clienteObra = "";
    this.enderecoObra = "";
    this.inicioObra = new Date()
    this.fimObra = new Date()
    console.log("Clearing input Fields")
  }

  createObra(){ 
    this.obraObj = new Obra(this.codObra,this.nomeObra,this.clienteObra,this.enderecoObra,this.inicioObra,this.fimObra)
  }

  submitObra(){
  console.log('SubmitWorking')
    this.createObra();
    let data = this.obraObj;
    console.log(data)
    this.lsServ.lsObjSet(this.codObra,data)
  }

}
