import {Injectable} from '@angular/core';
import {BoardModel} from '../../model/board/board.model';
import {LocalService} from './local/local.service';


export abstract class BoardService {
  public abstract saveBoard(board: BoardModel );

  public abstract getBoard(): BoardModel;
}
