import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private click: string;
  public stage_servece: string;
  private arraystorage =[]

 public getName(): string {
       return localStorage.getItem('name');
  }
  
  addDataName(namegame: string){
    localStorage.setItem('name', namegame);
   // console.log(namegame ); 
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

  /*-----------------------------*/
  addList(namegame:string, click:any){
     localStorage.setItem(namegame, JSON.stringify({ user: namegame, click: click }));
  }

  getList(){
       /* for(let key in localStorage) {
          return localStorage.getItem(key);
        }*/
        //localStorage.clear();//метод очистки хранилища, нужно продумать как очищать результаты
    for(let i=0; i<localStorage.length; i++) {
     let keys = localStorage.key(i);
     if(localStorage.key(i)!='click' && localStorage.key(i)!='name'){
      this.arraystorage.push(JSON.parse(localStorage.getItem(keys)))  
     }
        //console.log('++', localStorage.key(i))   
    } 
       // console.log('len', this.arraystorage.length)
       // console.log('len', this.arraystorage)
       this.arraystorage.sort(function(b, a){return a.click - b.click});
    return this.arraystorage
 }


}
