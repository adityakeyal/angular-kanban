import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../../model/card/card.model';

@Component({
  selector: 'app-card-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

   @Input() card: Card;
  @Input() listIndex: number;
  @Input() cardIndex: number;


  constructor() { }

  ngOnInit() {
    // this.card = new Card('', 'CUSLONE-1306', 'Unable to connect to TSD response', 'This is a description');
  }

  identifyCardBeingDragged(dragEvent: DragEvent) {
    dragEvent.dataTransfer.effectAllowed = 'move'
    dragEvent.dataTransfer.dropEffect= 'move'

    dragEvent.dataTransfer.setData( 'text', JSON.stringify(this.card));
  }

  allowCardDragToBeDropped(dragEvent: DragEvent) {
    dragEvent.dataTransfer.dropEffect= 'move'
    dragEvent.preventDefault();
  }
}
