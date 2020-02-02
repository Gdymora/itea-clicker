import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  finishclick:any;
  resultclick:string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.finishclick = this.dataService.getClick();
    if (this.finishclick <= 10){
      this.resultclick = ' так собі';
    }  else if (this.finishclick > 10 && this.finishclick <= 15){
      this.resultclick = ' добре, та треба краще';
    } else if (this.finishclick > 15 && this.finishclick <= 20){
      this.resultclick = ' дуже добре, це рекорд';
    } else {
      this.resultclick = ' так не буває, ти граешь не чесно. Та це жарт. Ти просто суперово клікаешь!';
    }
    console.log(this.dataService.getClick());
  }

  onStart(start:boolean){
    start==true?console.log(100):console.log(200);
    
  }



}
