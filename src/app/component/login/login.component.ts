import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() stage: string;  

  @Output() stageFinish = new EventEmitter<boolean>();

  lastName:string;
  
  addLastName() {
      console.log(this.lastName);
  }


  
}
