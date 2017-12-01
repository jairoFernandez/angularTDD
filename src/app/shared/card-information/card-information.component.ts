import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {
  title: string = "";

  constructor() { 
    this.title = "Título de ejemplo";
  }

  ngOnInit() {
  }

}
