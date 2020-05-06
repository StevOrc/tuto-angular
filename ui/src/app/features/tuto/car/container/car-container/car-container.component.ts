import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'app-car-container',
  templateUrl: './car-container.component.html',
  styleUrls: ['./car-container.component.css']
})
export class CarContainerComponent implements OnInit {

  cars: Car[];
  carDeatils: Car;
  idCar: number;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.cars.subscribe( data => {
      this.cars = data;
      this.carDeatils = this.cars[0];
      this.idCar = this.cars[0].idCar;
    })
  }

  onClickDetails(event){
    this.carDeatils = event;
  }

  onClickSelectedRow(event){
    this.idCar = event;
  }
}
