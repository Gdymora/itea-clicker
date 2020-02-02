import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-finish-button',
  templateUrl: './finish-button.component.html',
  styleUrls: ['./finish-button.component.css']
})
export class FinishButtonComponent{

  @Output() onStart = new EventEmitter<boolean>(); 
  
  start(boolstart:boolean) {
      this.onStart.emit(boolstart);     
  } 
  

}
