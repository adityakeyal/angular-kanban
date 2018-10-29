import {Component, NgModule, OnInit} from '@angular/core';
import {List, ListInterface} from '../../../model/list/list.model';
import { MovementIntf } from 'src/app/model/card/movement';
import {BoardService} from '../../../service/board/board-service';
import {BoardModel} from '../../../model/board/board.model';
import {LocalService} from '../../../service/board/local/local.service';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {


  lists: ListInterface[];

  constructor(private localService: LocalService) { }

  ngOnInit() {

    const board = this.localService.getBoard();
    this.lists = board.lists || [];

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

  moveCardAcrossList(movementInformation: MovementIntf) {
    const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
    this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx , 0 , ...cardMoved);
  }

  saveBoard() {
    const boardModel = new BoardModel();
    boardModel.lists = this.lists;
    this.localService.saveBoard(boardModel);
  }
}
