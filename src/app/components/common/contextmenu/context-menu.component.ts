import {Component, OnInit, Output, EventEmitter, HostListener, ElementRef} from '@angular/core';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  show = false;
 @Output() clickChange:  EventEmitter<number> = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  emitCloseEvent() {
     this.clickChange.emit(null);
     this.show = false;
  }

  @HostListener('document:click' , [ '$event' ])
  closeOutClickOutside(event) {
    console.log("Hello " + event);
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }


}
