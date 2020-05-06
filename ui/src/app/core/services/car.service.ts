import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: BehaviorSubject<Car[]> = new BehaviorSubject(null);

  constructor() {
    this.iniData();
  }


  iniData(): void {
    const datas : Car[] = [];

    let car1: Car = {
      idCar: 1,
      couleur: "noir",
      marque: "BMW",
      model: "serie 1",
      prix: 25000,
      pays: "Allemagne"
    };
    let car2: Car = {
      idCar: 2,
      couleur: "bleu",
      marque: "Renault",
      model: "megan",
      prix: 12000,
      pays: "France"
    };
    let car3: Car = {
      idCar: 3,
      couleur: "rouge",
      marque: "Toyota",
      model: "Panda",
      prix: 7000,
      pays: "Japon"
    };

    datas.push(car1);
    datas.push(car2);
    datas.push(car3);

    this.cars.next(datas);
  }
}
