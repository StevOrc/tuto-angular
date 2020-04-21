import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username: string = 'Steven';
  password = '123456';

  isConnected: boolean = false;

  value = "username"

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
