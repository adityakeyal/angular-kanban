import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ListInterface} from '../../../model/list/list.model';
import {Card} from '../../../model/card/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {

  @Input() list: ListInterface;

  // headingEditMode = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.list.cards = [];
  }

  addNewCard() {
    this.list.cards.push(new Card('', 'header', 'summary', 'sample desc'));
  }


}
