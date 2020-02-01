import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-layout-start',
  templateUrl: './layout-start.component.html',
  styleUrls: ['./layout-start.component.css']
})
export class LayoutStartComponent{

  @Input() user: string;  
  @Input() clicks: number;
  @Input() timeLeft: number;

  @Input() 
  set stage(stage:string){
    console.log(stage="finish");
  };

  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onStartTimer = new EventEmitter<boolean>();
/*
  timeLeft: number = 10;
  interval;
  bool_interval: boolean = true;
*/
  change(increased:any) {
      this.onChanged.emit(increased);
     
  }
  startTimer(bool_interval:any) {
    this.onStartTimer.emit(bool_interval);
    console.log(500); 
}
/*
  startTimer() {
    this.timeLeft = 10;
    this.bool_interval = true;
    this.interval = setInterval(() => {

      if(this.timeLeft > 0 && this.bool_interval) {
        this.timeLeft--;
      } else {
        this.bool_interval = false;
       
      }
    },1000)
  }
*/
 

  
}
