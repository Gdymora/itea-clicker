import { Component } from '@angular/core';
import {DataService} from './service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lastName: string;
  stage: string ;
  clicks:number = 0;

 constructor(private dataService: DataService) {
    this.stage ='start'
    this.lastName = this.dataService.getName()==undefined ?'Гость':this.dataService.getName();
   }


   /*Принимает условие для отображения слоев*/
  stageLogin(stage: string) {      
      this.lastName = this.dataService.getName();
      this.stage = stage;
  }

 /*Считает количество кликов*/
  onChanged(increased:any){
    increased==true?this.clicks++:this.clicks=this.clicks-6;
    this.randomInt(1, 7) < 2 ? this.condition = false : this.condition = true ;    
  }
  
  /*Случайное число*/
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 /*Таймер*/
  timeLeft: number = 10;
  interval;
  bool_interval: boolean = true;
  condition: boolean = false;

  onStartTimer(bool_interval:any) {
    this.stage ='game'
    this.timeLeft = 10;  
    this.bool_interval = bool_interval;

    this.interval = setInterval(() => {
      if(this.timeLeft > 1 && this.bool_interval) {
           this.condition = true 
        this.timeLeft--;
      } else {
        this.bool_interval = false;
        this.stage ='finish'
        this.dataService.addDataClick(this.clicks);
       
      }
    },1000)
  }

 

}
