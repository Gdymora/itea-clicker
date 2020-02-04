import { Component, EventEmitter, Input, Output} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 lastName:string;

  @Input() stage: string;  
  @Input() name: string;  //получаем значение

  @Output() stageLogin = new EventEmitter<boolean>(); 

  constructor(private dataService: DataService){}

  addLastName() {    
      this.dataService.addDataName(this.lastName);
      this.stageLogin.emit();
      this.dataService.stage_servece ='press'
      console.log(this.dataService.stage_servece);

  }
  
}
