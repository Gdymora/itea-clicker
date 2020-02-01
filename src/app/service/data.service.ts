import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private name: string;
  private click: string;

  getName(): string {
    this.name = localStorage.getItem('name');
    return this.name;
  }
  
  addDataName(namegame: string){
    this.name = namegame;
    localStorage.setItem('name', namegame);
  }
/*-------------------------------------------------*/
  getClick(): string {
    this.click = localStorage.getItem('click');
    return this.click;
  }
  
  addDataClick(click: any){
    this.click = click;
    localStorage.setItem('click', click);
  }

}
