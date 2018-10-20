import {Component, NgModule, OnInit} from '@angular/core';
import {List, ListInterface} from '../../../model/list/list.model';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {


  lists: ListInterface[];

  constructor() { }

  ngOnInit() {

    this.lists = [];

    // ideally retrive and initialize from some storage.

  }

  addList(nameOfList: string) {
    const newList: ListInterface = new List();
    newList.name = nameOfList;
    newList.position = this.lists.length + 1;
    if (this.lists === undefined) {
      this.lists = [];
    }
    this.lists.push(newList);
  }
}
