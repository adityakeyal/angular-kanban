import {Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter} from '@angular/core';
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

  constructor(private elementRef: ElementRef) { }

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
    // { 'listIndex' : this.listIndex, 'cardIndex' : this.cardIndex };
    
    const elements: Element[] = document.elementsFromPoint(dragEvent.x, dragEvent.y);

    const cardElementBeingDroppedOn = elements.find( x => x.className==='card');
    const listIndexDroppedOn = parseInt(cardElementBeingDroppedOn.getAttribute('listIndex'));
    const cardIndexDroppedOn = parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'));

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
