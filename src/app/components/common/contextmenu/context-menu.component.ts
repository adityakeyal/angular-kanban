import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  show: boolean = false;

  @Output('click') clickChange:  EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitCloseEvent(){
    this.clickChange.emit(null);
  }

}
