import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[];
  carDetails: Car;
  rowSelected: number;
  test: string = 'TEST !!';

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.cars.subscribe( data => {
      if(data){
        this.cars = data;
        this.carDetails = this.cars[0];
        this.rowSelected = this.carDetails.idCar;
      }else{
        this.cars = [];
      }
    })
  }

  onClickDetails(car){
    this.carDetails = car;
  }

  selectedRow(event){
    this.rowSelected = event;
  }

  catchUsername(event){
    console.log(event);
  }
}
