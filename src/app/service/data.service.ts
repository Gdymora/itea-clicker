import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  private click: string;

 public getName(): string {
       return localStorage.getItem('name');
  }
  
  addDataName(namegame: string){
    localStorage.setItem('name', namegame);
    console.log(namegame ); 
  }
/*-------------------------------------------------*/
  getClick(): any {
    this.click = localStorage.getItem('click');
    return this.click;
  }
  
  addDataClick(click: any){
    this.click = click;
    localStorage.setItem('click', click);
  }

}
