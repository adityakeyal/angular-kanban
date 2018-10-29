import { Injectable } from '@angular/core';
import {BoardService} from '../board-service';
import {BoardModel} from '../../../model/board/board.model';

@Injectable({
  providedIn: 'root'
})
export class LocalService extends BoardService {
 public saveBoard(board: BoardModel) {
    localStorage.setItem(`board`, JSON.stringify(board));
  }

  public getBoard(): BoardModel {
    const item = localStorage.getItem(`board`);
    return JSON.parse(item || '{}');
  }


}
