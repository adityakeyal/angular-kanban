import { Component, OnInit } from '@angular/core';
import {Card} from '../../../model/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cards: Card[]

  constructor() { }

  ngOnInit() {
    this.cards = [
      new Card('1', 'CUSLONE-1306', 'Summary-1306', 'Desription for 1306'),
      new Card('2', 'CUSLONE-999', 'Summary-999', 'Desription for 999'),
    ];
  }

}
