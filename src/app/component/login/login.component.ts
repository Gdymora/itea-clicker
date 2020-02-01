import { Component, EventEmitter, Input, Output} from '@angular/core';
import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() stage: string;  

  @Output() stageLogin = new EventEmitter<boolean>();

 
  constructor(private dataService: DataService){}

  lastName:string;
  
  addLastName() {
      //console.log(this.lastName);
      this.stageLogin.emit();
      this.dataService.addDataName(this.lastName);
     // console.log(this.dataService.getName());
  }
  
}
