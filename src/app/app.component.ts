import { Component } from '@angular/core';
import {DataService} from './service/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lastName: string;
  stage:string;
  
 constructor(private dataService: DataService) {
    this.dataService.stage_servece ='start'
    this.stage = this.dataService.stage_servece;
    this.lastName = this.dataService.getName()==undefined ?'Гость':this.dataService.getName();
   }


   /*Принимает условие для отображения слоев*/
  stageLogin() {      
      this.lastName = this.dataService.getName();
      this.dataService.stage_servece ='press'
      this.stage = this.dataService.stage_servece;
      console.log(this.dataService.stage_servece);
  }


 

}
