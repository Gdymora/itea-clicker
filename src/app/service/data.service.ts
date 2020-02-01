import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private name: string;

  getName(): string {
          
    return this.name;
}
addDataName(namegame: string){
      
    this.name = namegame;
}

}
