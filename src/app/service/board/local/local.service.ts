import { Injectable } from '@angular/core';
import {BoardService} from '../board-service';
import {BoardModel} from '../../../model/board/board.model';


export class LocalService extends BoardService {
  saveBoard(board: BoardModel) {
    localStorage.setItem('board-' + board.name, JSON.stringify(board));
  }


}
