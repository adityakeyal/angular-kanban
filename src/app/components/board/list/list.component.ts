import {Component, ElementRef, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ListInterface} from '../../../model/list/list.model';
import {Card} from '../../../model/card/card.model';
import { MovementIntf, Movement } from 'src/app/model/card/movement';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})




export class ListComponent implements OnInit {

  @Input() list: ListInterface;
  @Input() listIndex: number;
  @Output() moveCardAcrossList: EventEmitter<MovementIntf> = new EventEmitter<MovementIntf>();


  private cardCount = 0;

  constructor(private elementRef: ElementRef , @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

    this.list.cards = [];
  }

  addNewCard() {
    this.list.cards.push(new Card(this.cardCount++ + '', 'header' + this.cardCount, 'summary' + this.cardCount, 'sample desc'));
  }


  allowCardReplacement(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect = 'move';
    dragEvent.preventDefault();
  }


  dropCard(dragEvent: DragEvent) {

    
    const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
    const elements: Element[] = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
    const cardElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase()==='app-card-summary');
    const listElementBeingDroppedOn = elements.find( x => x.tagName.toLowerCase()==='app-list');
    const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'));
    const cardIndexDroppedOn  = cardElementBeingDroppedOn === undefined ? undefined : parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'));
    const listIndexDragged = parseInt(data.listIndex);
    const cardIndexDragged = parseInt(data.cardIndex);

    if(listIndexDragged === listIndexDroppedOn){
        //same list just re-organize the cards
        const cardDragged = this.list.cards.splice(cardIndexDragged,1);
        this.list.cards.splice(cardIndexDroppedOn , 0 , ...cardDragged);
    }
    else {
      this.moveCardAcrossList.emit(new Movement(listIndexDragged, listIndexDroppedOn , cardIndexDragged , cardIndexDroppedOn));
    }

  }
}
