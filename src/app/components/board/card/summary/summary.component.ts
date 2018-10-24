import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../../model/card/card.model';

@Component({
  selector: 'app-card-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

   @Input() card: Card;

  constructor() { }

  ngOnInit() {
    // this.card = new Card('', 'CUSLONE-1306', 'Unable to connect to TSD response', 'This is a description');
  }

  identifyCardBeingDragged(dragEvent: DragEvent) {
    dragEvent.dataTransfer.setData( 'text', JSON.stringify(this.card));
  }

  allowCardDragToBeDropped($event) {
    $event.preventDefault();
  }
}
