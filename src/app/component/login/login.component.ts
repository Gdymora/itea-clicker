import { Component, EventEmitter, Input, Output} from '@angular/core';
import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 _lastName:string;

  @Input() stage: string;  
  @Input() name: string;  

  @Output() stageLogin = new EventEmitter<boolean>();
 

  constructor(private dataService: DataService){}

 
  
  addLastName() {
      //console.log(this.lastName);
      this.stageLogin.emit();
      this.dataService.addDataName(this._lastName);
     //console.log(this.dataService.getName());
  }
  
}
