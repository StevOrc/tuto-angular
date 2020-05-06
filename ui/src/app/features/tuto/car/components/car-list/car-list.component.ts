import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input('cars') cars: Car[];
  @Output('onClickCarDetails') carDetailsEvent: EventEmitter<Car> = new EventEmitter();
  @Input('rowSelected') rowSelected: number;

  constructor() { }

  ngOnInit(): void {

  }

  onClickDetails(car){
    this.carDetailsEvent.emit(car);
  }

  selectedRow(event){
    this.rowSelected = event;
  }

  catchUsername(event){
    console.log(event);
  }
}
