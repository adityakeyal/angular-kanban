import { Component, OnInit, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inine-edit',
  templateUrl: './inine-edit.component.html',
  styleUrls: ['./inine-edit.component.css']
})
export class InineEditComponent implements OnInit {

  private isEditable = false;

  @Input() private name;

  @Output() private nameChange = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }


  clickedInside($event: Event) {

    this.isEditable = true;
    $event.preventDefault();
    $event.stopPropagation();  // <- that will stop propagation on lower layers

  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    const targetElement = $event.target as HTMLElement;

    if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
      this.nameChange.emit(this.name);
      this.isEditable = false;
      $event.preventDefault();
      $event.stopPropagation();  // <- that will stop propagation on lower layers
    }

  }


}
