import {Injectable} from '@angular/core';
import {BoardModel} from '../../model/board/board.model';

@Injectable({
  providedIn: 'root'
})
export abstract class BoardService {
  abstract saveBoard(board: BoardModel );
}
