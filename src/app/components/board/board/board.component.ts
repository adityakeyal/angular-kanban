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

    // const rel27List = new List();
    // rel27List.id = '1';
    // rel27List.name = 'REL-27';
    //
    // const rel28List = new List();
    // rel28List.id = '2';
    // rel28List.name = 'REL-28';
    //
    // this.lists = [rel27List , rel28List];

  }

  addList(nameOfList: string) {
    const newList: ListInterface = new List();
    newList.name = nameOfList;
    newList.position = this.lists.length + 1;
    this.lists.push(newList);
  }
}
