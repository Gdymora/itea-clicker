import { Component, EventEmitter, Output} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-layout-press',
  templateUrl: './layout-press.component.html',
  styleUrls: ['./layout-press.component.css']
})
export class LayoutPressComponent {
  
  constructor(private dataService: DataService) {
   
  }
  @Output() onStartTimer = new EventEmitter<boolean>();

  startTimer(bool_interval:any) {
    this.dataService.stage_servece='game'
    this.onStartTimer.emit(bool_interval);

    
}


}
