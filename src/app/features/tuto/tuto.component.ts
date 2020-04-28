import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.css']
})
export class TutoComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
  }

  username: string = 'Steven';
  password = '123456';

  isConnected: boolean = false;
  testNgTemplate: boolean = true;

  value = "username"

  cars: Car[] = [
    {idCar: 1, couleur: 'rouge', marque: 'BMW', model: 'serie 1', prix: 20000},
    {idCar: 2, couleur: 'noir', marque: 'Renaut', model: 'ZOE', prix: 17},
    {idCar: 3, couleur: 'vert', marque: 'Toyota', model: 'Yaris', prix: 30000},
    {idCar: 4, couleur: 'bleu', marque: 'Test', model: 'Test', prix: 10000}
  ]


  dateNow(){
    let now = new Date();
    return now.getDate() +" / "+ now.getMonth() +"/ "+ now.getFullYear();
  }

  onClick(){
    this.username = this.value;
  }

  onClickConnected(): void {
    this.isConnected = !this.isConnected;
  }
}
