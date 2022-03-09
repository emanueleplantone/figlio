import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'figlio';
  propr_A = "non ho ricevuto ancora nulla"

  gestisciEventoP(data : {messaggio:string}){
    console.log(data.messaggio)
    this.propr_A=data.messaggio
  }
}
