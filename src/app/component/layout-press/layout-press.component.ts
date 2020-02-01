import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-layout-press',
  templateUrl: './layout-press.component.html',
  styleUrls: ['./layout-press.component.css']
})
export class LayoutPressComponent {

  @Output() onStartTimer = new EventEmitter<boolean>();

  startTimer(bool_interval:any) {
    this.onStartTimer.emit(bool_interval);
    console.log(500); 
}


}
