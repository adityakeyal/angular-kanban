import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../model/card/card.model';
import {List, ListInterface} from '../../../model/list/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: ListInterface;

  constructor() { }

  ngOnInit() { }

}
