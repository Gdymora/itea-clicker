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
  @Input() condition: boolean;
 /*
  @Input() 
  set stage(stage:string){
    console.log(stage="finish");
  };
*/
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onStartTimer = new EventEmitter<boolean>();
  
  change(increased:any) {
      this.onChanged.emit(increased);
     
  }
  startTimer(bool_interval:any) {
    this.onStartTimer.emit(bool_interval);
}
 

  
}
