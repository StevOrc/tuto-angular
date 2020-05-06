import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  @Input('car') car: Car;
  
  @Output('onClickSelectRow') selectedCar: EventEmitter<number> = new EventEmitter();
  @Output('onClickUsername') sendUsername: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickEmitEvent(idCar){
    this.selectedCar.emit(idCar);
  }

  onClickSendUsername(){
    let obj = {
      username: 'Steven',
      age: 34
    };

    this.sendUsername.emit(obj);
  }
}
