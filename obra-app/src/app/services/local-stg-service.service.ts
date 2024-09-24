import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStgServiceService {

  constructor() { }

  lsObjSet(key:string,item:object){
    localStorage.setItem(key,JSON.stringify(item))
  }

  lsObjGetOne(key:string){
      let item = localStorage.getItem(key)
      if(typeof item === 'string'){
        return JSON.parse(item)}
  }

  lsObjGetAll(){
    let arr = [];
    for(let i = 0; i <= localStorage.length-1; i++){
      arr.push(this.lsObjGetOne(`${localStorage.key(i)}`))
    }
      return arr
    }

  lsKeyGetAll(){
    let keysArr = [];
    for(let i = 0; i<= localStorage.length-1; i++){
      keysArr.push(localStorage.key(i))
    }
    return keysArr;
  }


}
