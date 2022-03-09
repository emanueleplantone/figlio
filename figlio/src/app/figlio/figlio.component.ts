import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {

  prop_B:string="ValoreB";
  @Output() eventop = new EventEmitter<{messaggio:string}>();




  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.eventop.emit({messaggio: this.prop_B})
  }



}
