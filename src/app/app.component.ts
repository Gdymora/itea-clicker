import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
    this.stage ='start'
   }
  stage: string ;

  changeStet(game): string{
          
    return this.stage = game;
}
}
