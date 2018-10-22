import { Component, OnInit, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit {

  isEditable = false;

  @Input() private name;
  @Input() private editableClass = 'inline';

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
