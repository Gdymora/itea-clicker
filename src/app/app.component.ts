import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
    this.stage ='start'
   }
  stage: string ;
  clicks:number = 0;

  stageLogin(stage: string): string{
      console.log(stage);    
    return this.stage = stage;
  }

  onChanged(increased:any){
    increased==true?this.clicks++:this.clicks--;
    console.log(this.clicks);   
  }

  timeLeft: number = 10;
  interval;
  bool_interval: boolean = true;

  onStartTimer(bool_interval:any) {
    
    this.timeLeft = 10;
    this.bool_interval = bool_interval ;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0 && this.bool_interval) {
        this.timeLeft--;
      } else {
        this.bool_interval = false;
        this.stage ='finish'
       
      }
    },1000)
  }

 

}
