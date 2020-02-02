import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {DataService} from '../../service/data.service';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  finishclick:any;
  resultclick:string;
  arraystorage = []
  nameuser:string;

  constructor(private dataService: DataService) {
   
   }
  
/*Используем перехватчик для вывода пользователю сообщения */
  ngOnInit() {
    this.finishclick = this.dataService.getClick();
    if (this.finishclick <= 10){
      this.resultclick = ' так собі';
    }  else if (this.finishclick > 10 && this.finishclick <= 15){
      this.resultclick = ' добре, та треба краще';
    } else if (this.finishclick > 15 && this.finishclick <= 20){
      this.resultclick = ' дуже добре, але можна краще';
    } else if (this.finishclick > 20 && this.finishclick <= 40){
      this.resultclick = ' ого, це рекорд';
    } else {
      this.resultclick = ' так не буває, ти граешь не чесно. Та це жарт. Ти просто суперово клікаешь!';
    }
    this.nameuser = this.dataService.getName()
    this.dataService.addList(this.dataService.getName(), this.finishclick)
    this.arraystorage = this.dataService.getList()

    //console.log(this.dataService.getList())
   
    
  }
/*Передаем событие кнопок полученых от дочернего компонента 
                      finish-button родительскому компоненту app */
  @Output() onFinish = new EventEmitter<boolean>(); 

  onStart(start:boolean){
    /*меняем в сервисе данные которые прочитает родительский компонент App после получения события*/
     start==true ? location.reload(): this.dataService.stage_servece='press';
    this.onFinish.emit(start);   
      }



}
